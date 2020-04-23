import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { TimePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import CircularProgress from '@material-ui/core/CircularProgress';

import {NewProcessDialog, ProcessTable} from './item_manager.jsx';
import SimpleExpansionPanel from './simulation_result.jsx';


export default class SimulationManager extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            rows: [],
            selectedDate: "2020 4/20 07:30:00",
            show_result: false,
            show_circular: false
        }

        this.cols = [
            {name: "item_name", ja_name: "アイテム名"},
            {name: "schedule_id", ja_name: "工程"},
            {name: "length", ja_name: "バレル数"}
        ]
        
        this.schedules = {
            1: {name: "schedule1"},
            2: {name: "schedule2"}
        };

        this.history_cols = [
            {name: "item_name", ja_name: "アイテム名"},
            {name: "action", ja_name: "アクション"},
            {name: "time", ja_name: "時刻"}
        ];
        this.process_histories = [
            {
                name: "メッキ1",
                rows: [
                    {item_name: "item0", action: "開始", time: "AM07:30"}
                ]
            },
            {
                name: "オーブン1",
                rows: [
                    {item_name: "item0", action: "開始", time: "AM07:30"}
                ]
            },
            {
                name: "オーブン2",
                rows: [
                    {item_name: "item0", action: "開始", time: "AM07:30"}
                ]
            }
        ]


        this.text_fields = (
            <div>
                <TextField
                autoFocus
                label="アイテム名"
                inputRef={el => this.itemField = el}
                fullWidth
                />
                <br/><br/>
                <InputLabel>作業工程</InputLabel>
                <Select
                inputRef={el => this.selectField = el}
                label="作業工程"
                fullWidth
                >
                    {Object.keys(this.schedules).map( key =>
                        <MenuItem value={key}>{this.schedules[key].name}</MenuItem>
                    )}
                </Select>
                <br/><br/>
                <TextField
                autoFocus
                label="バレル数"
                inputRef={el => this.lengthField = el}
                fullWidth
                />
            </div>
        );
    }

    add_schedule(){
        this.setState({
            rows: this.state.rows.concat({
                        schedule_id: this.selectField.value,
                        length: this.lengthField.value,
                        item_name: this.itemField.value
                    })
            });
    }

    change(time){
        console.log(time);
        this.setState({
            selectedDate: time
        });
    }

    run(){
        this.setState({
            show_result: false,
            show_circular: true
        });
        
        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        } 
        sleep(1000).then(() => {
            //do stuff
            this.show_result_func();
        })
    }

    show_result_func(){
        this.setState({
            show_result: true,
            show_circular: false
        });
    }

    sleep(waitSec, callbackFunc) {
 
        // 経過時間（秒）
        var spanedSec = 0;
     
        // 1秒間隔で無名関数を実行
        var id = setInterval(function () {
     
            spanedSec++;
     
            // 経過時間 >= 待機時間の場合、待機終了。
            if (spanedSec >= waitSec) {
     
                // タイマー停止
                clearInterval(id);
     
                // 完了時、コールバック関数を実行
                if (callbackFunc) callbackFunc();
            }
        }, 1000);
    }
    

    render(){
        return(
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <h3>投入アイテムの登録</h3>
                    <p>実際に工場で処理をするアイテムを処理を行う順序で登録します。
                        登録するときに、アイテムに対してどのような加工を行うのかを作業工程によって指定します。
                        今後、機能拡張により、アイテムの投入順序も編集できるようにする予定です。
                    </p>
                    <NewProcessDialog
                        handleSubmit={(ret) => this.add_schedule()}
                        text_fields={this.text_fields}
                        button_text="アイテムを登録"
                    />
                    <ProcessTable rows={this.state.rows} cols={this.cols} />
                    </Grid>
                    <Grid item xs={12}>
                    <h3>シミュレーション実行</h3>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker
                        showTodayButton
                        todayLabel="now"
                        label="開始時間"
                        value={this.state.selectedDate}
                        minutesStep={1}
                        onChange={(time)=>this.change(time)}
                    />
                    </MuiPickersUtilsProvider>
                    <Button color="primary" variant="contained" onClick={() => this.run()}>実行</Button>
                    </Grid>
                    <Grid item xs={12}>
                    {this.state.show_circular &&
                        <CircularProgress />
                    }
                    {this.state.show_result &&
                        <SimpleExpansionPanel process_histories={this.process_histories} cols={this.history_cols}/>
                    }
                    </Grid>
                </Grid>
            </div>
        );
    }
}