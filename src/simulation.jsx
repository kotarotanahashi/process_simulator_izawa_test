import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { TimePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import {NewProcessDialog, ProcessTable} from './item_manager.jsx';


export default class SimulationManager extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            rows: [],
            selectedDate: null
        }
        this.cols = [
            {name: "schedule_id", ja_name: "工程"},
            {name: "length", ja_name: "バレル数"}
        ]
        
        this.schedules = {
            1: {name: "schedule1"},
            2: {name: "schedule2"}
        };


        this.text_fields = (
            <div>
                <InputLabel>工程を選択</InputLabel>
                <Select
                inputRef={el => this.selectField = el}
                fullWidth
                >
                    {Object.keys(this.schedules).map( key =>
                        <MenuItem value={key}>{this.schedules[key].name}</MenuItem>
                    )}
                </Select>
                <br/>
                <TextField
                autoFocus
                label="バレル数"
                inputRef={el => this.textField = el}
                fullWidth
                />
            </div>
        );
    }

    add_schedule(){
        this.setState({
            rows: this.state.rows.concat({
                        schedule_id: this.selectField.value,
                        length: this.textField.value
                    })
            });
    }

    change(time){
        this.setState({
            selectedDate: time
        });
    }

    render(){
        return(
            <div>
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
                <Button color="primary" variant="contained">実行</Button>
                <h3>工程の追加</h3>
                <NewProcessDialog
                    handleSubmit={(ret) => this.add_schedule()}
                    text_fields={this.text_fields}
                    name="工程"
                />
                <ProcessTable rows={this.state.rows} cols={this.cols} />
            </div>
        );
    }
}