import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


import {NewProcessDialog, ProcessTable} from './item_manager.jsx';



class ScheduleManager extends React.Component {
  
    constructor(props){
        super(props);
        
        this.classes = makeStyles((theme) => ({
            formControl: {
                margin: theme.spacing(1),
                minWidth: 120,
            },
            selectEmpty: {
                marginTop: theme.spacing(2),
            },
        }));

        this.schedule = props.schedule;
        this.processes = props.processes;
        this.process_confs = props.process_confs;
        this.call_back = props.call_back;
        this.state = {
            rows: this.schedule.steps.map(step =>(
                {  
                    process: this.processes[step.process_id].name,
                    process_conf: this.process_confs[step.process_conf_id].name
                }
            ))
        }
    
        this.schedule_name = this.schedule.name;

        this.selectField = {}
        
        this.cols = [
            {name: "process", ja_name: "プロセス"},
            {name: "process_conf", ja_name: "プロセス設定"}
        ];

        this.selectField = {};

        this.text_fields = (
            <div>
                <InputLabel>プロセス</InputLabel>
                <Select
                inputRef={el => this.selectField["process"] = el}
                fullWidth
                >
                    {Object.keys(this.processes).map( key =>
                        <MenuItem value={key}>{this.processes[key].name}</MenuItem>
                    )}
                </Select>
                <br/><br/>
                <InputLabel>プロセス設定</InputLabel>
                <Select
                inputRef={el => this.selectField["process_conf"] = el}
                fullWidth
                >
                    {Object.keys(this.process_confs).map( key =>
                        <MenuItem value={key}>{this.process_confs[key].name}</MenuItem>
                    )}
                </Select>
            </div>
        );
    }
  
    add_step(){
        let process_id = this.selectField["process"].value;
        let process_conf_id = this.selectField["process_conf"].value;
        let new_row = {
            process: this.processes[process_id].name,
            process_conf: this.process_confs[process_conf_id].name
        }
        let schedule_id = this.schedule.id;
        this.call_back({schedule_id, process_id, process_conf_id});
        this.setState(state => ({
            rows: state.rows.concat(new_row),
        }));
    }
  
    render() {
      return(
        <div>
          <h3>{this.schedule_name}</h3>
          <NewProcessDialog
            handleSubmit={(ret) => this.add_step()}
            text_fields={this.text_fields}
            button_text={this.schedule_name + "に新規ステップを追加"}
          />
          <ProcessTable rows={this.state.rows} cols={this.cols} />
        </div>
      );
    }
}

export default class SchedulesManager extends React.Component {

    constructor(props){
        super(props);
        this.name="a";
        this.state = {
            schedules: {
                1:
                    {
                        id: 1,
                        name: "品番076764-7867用工程",
                        steps: [
                            {process_id: 1, process_conf_id: 4},
                            {process_id: 3, process_conf_id: 6}
                        ]
                    },
                2:
                    {
                        id: 2,
                        name: "品番9897-7667用工程",
                        steps: [
                            {process_id: 1, process_conf_id: 1},
                            {process_id: 2, process_conf_id: 5}
                        ]
                    },
                3:
                    {
                        id: 3,
                        name: "品番YF98787-8777用工程",
                        steps: [
                            {process_id: 1, process_conf_id: 1},
                            {process_id: 2, process_conf_id: 5}
                        ]
                    }
            },
            processes: {
                1: {name: "メッキ"},
                2: {name: "オーブン1"},
                3: {name: "オーブン2"}
            },
            process_confs: {
                1: {name: "メッキ120秒"},
                2: {name: "メッキ140秒"},
                3: {name: "メッキ150秒"},
                4: {name: "メッキ180秒"},
                5: {name: "スケジュール=1, 120分"},
                6: {name: "スケジュール=1, 180分"},
                7: {name: "スケジュール=2, 120分"},
                8: {name: "スケジュール=2, 180分"}
            }
        }

        // for testing
        this.schedule_id = this.state.schedules.length;

        this.text_fields = (
            <TextField
            autoFocus
            label="工程名"
            inputRef={el => this.textField = el}
            fullWidth
            />
        );
    }

    addSchedule(){
        console.log(this.textField.value);
        let schedule_id = this.schedule_id + 1;
        let new_schedule = {
            id: schedule_id,
            name: this.textField.value,
            steps: []
        }
        this.setState(state => {
            state.schedules[schedule_id] = new_schedule;
            return state;
        })
    }

    add_step(values){
        let schedule_id = values.schedule_id;
        let process_id = values.process_id;
        let process_conf_id = values.process_conf_id;

        this.setState(state => {
            let new_step = {process_id, process_conf_id};
            state.schedules[schedule_id].steps = state.schedules[schedule_id].steps.concat(new_step);
            return state;
        })
    }

    render(){
        return(
            <div>
                <h2>加工工程管理</h2>
                <NewProcessDialog
                    handleSubmit={() => this.addSchedule()}
                    text_fields={this.text_fields}
                    button_text="新規工程を追加"
                />
                {Object.keys(this.state.schedules).map( schedule_id => {
                    let s = this.state.schedules[schedule_id];
                    return(<ScheduleManager
                        schedule={s}
                        processes={this.state.processes}
                        process_confs={this.state.process_confs}
                        call_back={(values) => this.add_step(values)}
                    />)
                })}
            </div>
        );
    }
}