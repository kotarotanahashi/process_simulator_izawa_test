import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// BrowserRouter
import { BrowserRouter, Route } from 'react-router-dom';

import ItemManager from './item_manager.jsx';
import SchedulesManager from './schedule.jsx';





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
      <a href="/">Homeにもどる</a>
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
      <a href="/">Homeにもどる</a>
      <ItemManager name="plating_conf" cols={plating_conf_cols} />
      <ItemManager name="oven_conf" cols={oven_conf_cols} />
    </div>
  );
}

function SchedulePage(){
  
  return (
    <div>
      <a href="/">Homeにもどる</a>
      <SchedulesManager />
    </div>
  );
}

let Home = () => {
  return (
    <div>
      <h1>Welcome to home page</h1>
      <a href="/process">プロセスを管理</a><br/>
      <a href="/process_config">プロセス設定を管理</a><br/>
      <a href="/schedule">スケジュールを管理</a>
    </div>
  );
}


class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/process" component={ProcessPage} />
        <Route path="/process_config" component={ProcessConfigPage} />
        <Route path="/schedule" component={SchedulePage} />
      </div>
      </BrowserRouter>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

