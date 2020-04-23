import React from 'react';

// Grid
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
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

export default function AppFrame(props){

    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    let handleClick = (e) => {
      console.log("handle click");
      console.log(e);
      props.setPage(e);
    }
  
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
        <ListItem button onClick={() => handleClick("simulation")}>
            <ListItemIcon><PlayCircleOutlineIcon /></ListItemIcon>
            <ListItemText primary="シミュレーション" />
          </ListItem>
          <ListItem button onClick={() => handleClick("schedule")}>
            <ListItemIcon><AccessTimeIcon /></ListItemIcon>
            <ListItemText primary="加工工程管理" />
          </ListItem>
          <ListItem button onClick={() => handleClick("process")}>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary="マシン管理" />
          </ListItem>
          <ListItem button onClick={() => handleClick("process_config")}>
            <ListItemIcon><SettingsIcon /></ListItemIcon>
            <ListItemText primary="マシン設定管理" />
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
            生産プロセスシミュレータ IZAWA
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
        {props.content}
      </Grid>
    </Grid>
    </main>
    </div>
    );
  }