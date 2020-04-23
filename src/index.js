import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-snapshot';

// BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

import ItemManager from './item_manager.jsx';
import SchedulesManager from './schedule.jsx';
import AppFrame from './app_frame.jsx';
import SimulationManager from './simulation.jsx';



import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    //primary: blue,
  },
});



function ProcessPage(){
  
  /*let stock_cols = [
      {name: "name", ja_name: "名前"}
  ]
  
  let endpoint_cols = [
      {name: "name", ja_name: "名前"}
  ]*/

  let plating_cols = [
      {name: "name", ja_name: "名前"},
      {name: "length", ja_name: "メッキ曹の数"},
      {name: "time", ja_name: "利用可能時刻"}
  ]

  let oven_cols = [
      {name: "name", ja_name: "名前"},
      {name: "time", ja_name: "利用可能時刻"}
  ]

  let init_plating_rows = [
    {name: "メッキ曹1", length: 34, time: "07:30"}
  ];

  let init_oven_rows = [
    {name: "オーブン1", time: "07:30"},
    {name: "オーブン2", time: "07:30"}
  ];

  return (
    <div>
      <ItemManager name="plating" rows={init_plating_rows} title="メッキ曹一覧" button_text="メッキ曹を新規登録" cols={plating_cols} />
      <ItemManager name="oven" rows={init_oven_rows} title="オーブン一覧" button_text="オーブンを新規登録" cols={oven_cols} />
    </div>
  );
}

function ProcessConfigPage(){
  
  let plating_conf_cols = [
      {name: "bath_time", ja_name: "メッキ時間(秒)"}
  ]
  
  let oven_conf_cols = [
      {name: "schedule_id", ja_name: "スケジュールid"},
      {name: "baking_time", ja_name: "ベーキング時間(分)"}
  ]

  let init_plating_rows = [
    {bath_time: 120},
    {bath_time: 140},
    {bath_time: 150},
    {bath_time: 180}
  ];

  let init_oven_rows = [
    {schedule_id: 1, baking_time: 180},
    {schedule_id: 1, baking_time: 120},
    {schedule_id: 2, baking_time: 120},
    {schedule_id: 2, baking_time: 180}
  ];

  return (
    <div>
      <ItemManager name="plating_conf" rows={init_plating_rows} title="メッキ曹の設定一覧" button_text="メッキ曹の設定を追加" cols={plating_conf_cols} />
      <ItemManager name="oven_conf" rows={init_oven_rows} title="オーブンの設定一覧" button_text="オーブンの設定を追加"　cols={oven_conf_cols} />
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
    <SimulationManager />
  );
}

let Home = () => {
  return (
    <h1>生産プロセスシミュレータ IZAWA v0.0.1</h1>
  );
}

function App(props){
  let content = (
    <BrowserRouter>
    <div>
      <br/><br/><br/>
      <Route path="/" exact component={ProcessPage} />
      <Route path="/process.html" component={ProcessPage} />
      <Route path="/process_config.html" component={ProcessConfigPage} />
      <Route path="/schedule.html" component={SchedulePage} />
      <Route path="/simulation.html" component={SimulationPage} />
    </div>
    </BrowserRouter>
  );
  return(
    <AppFrame content={content}/>
  );
}

//ReactDOM.render(
render(
<ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

