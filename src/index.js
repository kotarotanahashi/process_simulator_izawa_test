import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

import ItemManager from './item_manager.jsx';
import SchedulesManager from './schedule.jsx';
import AppFrame from './app_frame.jsx';

import { createMuiTheme } from '@material-ui/core/styles';
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

function SimulationPage(){
  return (
    <div>
    </div>
  );
}

let Home = () => {
  return (
    <h1>伊澤シミュレータ v0.0.1</h1>
  );
}

function App(props){
  let content = (
    <BrowserRouter>
    <div>
      <br/><br/><br/>
      <Route path="/" exact component={Home} />
      <Route path="/process" component={ProcessPage} />
      <Route path="/process_config" component={ProcessConfigPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/simulation" component={SimulationPage} />
    </div>
    </BrowserRouter>
  );
  return(
    <AppFrame content={content}/>
  );
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

