import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

import ItemManager from './item_manager.jsx';
import SchedulesManager from './schedule.jsx';

// Grid
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SettingsIcon from '@material-ui/icons/Settings';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    //primary: blue,
  },
});

function ProcessPage(){
  
  let stock_cols = [
      {name: "name", ja_name: "名前"}
  ]
  
  let endpoint_cols = [
      {name: "name", ja_name: "名前"}
  ]

  let plating_cols = [
      {name: "name", ja_name: "名前"},
      {name: "length", ja_name: "メッキ曹の数"},
      {name: "time", ja_name: "時刻"}
  ]

  return (
    <div>
      <ItemManager name="plating" cols={plating_cols} />
      <ItemManager name="stock" cols={stock_cols} />
      <ItemManager name="end_point" cols={endpoint_cols} />
    </div>
  );
}

function ProcessConfigPage(){
  
  let plating_conf_cols = [
      {name: "bath_time", ja_name: "浸す時間"}
  ]
  
  let oven_conf_cols = [
      {name: "schedule_id", ja_name: "スケジュールid"},
      {name: "baking_time", ja_name: "ベーキング時間(分)"}
  ]

  return (
    <div>
      <ItemManager name="plating_conf" cols={plating_conf_cols} />
      <ItemManager name="oven_conf" cols={oven_conf_cols} />
    </div>
  );
}

function SchedulePage(){
  
  return (
    <div>
      <SchedulesManager />
    </div>
  );
}

let Home = () => {
  return (
    <h1>伊澤シミュレータ v0.0.1</h1>
  );
}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App(props){

  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      <ListItem component="a" href="/process_config">
          <ListItemIcon><PlayCircleOutlineIcon /></ListItemIcon>
          <ListItemText primary="シミュレーション" />
        </ListItem>
        <ListItem component="a" href="/schedule">
          <ListItemIcon><AccessTimeIcon /></ListItemIcon>
          <ListItemText primary="スケジュール管理" />
        </ListItem>
        <ListItem component="a" href="/process">
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="プロセス管理" />
        </ListItem>
        <ListItem component="a" href="/process_config">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="プロセス設定管理" />
        </ListItem>
        
      </List>
      <Divider />
      <List>
        <ListItem button key="inquiry">
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="お問い合わせ" />
        </ListItem>
      </List>
    </div>
  );
  
  return(
    <div>
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          IZAWA 生産プロセスシミュレータ
        </Typography>
      </Toolbar>
    </AppBar>
    <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    <main>
    <Grid container spacing={2}>
    <Grid item xs={3}>
    </Grid>
    <Grid item xs={9}>  
      <BrowserRouter>
    <div>
      <br/><br/><br/>
      <Route path="/" exact component={Home} />
      <Route path="/process" component={ProcessPage} />
      <Route path="/process_config" component={ProcessConfigPage} />
      <Route path="/schedule" component={SchedulePage} />
    </div>
    </BrowserRouter>
    </Grid>
  </Grid>
  </main>
  </div>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  document.getElementById('root')
);

