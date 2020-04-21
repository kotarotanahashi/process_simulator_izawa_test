import React from 'react';
import './index.css';
import Button from '@material-ui/core/Button';

// table
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


// Dialog
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function TableTemplate(props){
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          {props.header_row}
        </TableHead>
        <TableBody>
          {props.body_rows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ProcessTable(props){
  let header_row = (
    <TableRow>
      {props.cols.map((col) => (
          <TableCell>
            {col.ja_name}
          </TableCell>  
      ))}
    </TableRow>
  );

  let body_rows = (
    props.rows.map((row) => (
      <TableRow key={row.name}>
        {props.cols.map((col) => (
          <TableCell component="th" scope="row">
            {row[col.name]}
          </TableCell>  
        ))}
      </TableRow>
    ))
  );

  return TableTemplate({header_row, body_rows});
}

function NewProcessDialog(props){
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    props.handleSubmit();
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{props.name}を追加</DialogTitle>
        <DialogContent>
          <DialogContentText>
            追加する{props.name}の情報を入力してください。
          </DialogContentText>
          {props.text_fields}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            追加
          </Button>
          <Button onClick={handleClose} color="secondary">
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>

      <Button onClick={handleClickOpen} color="primary" variant="contained">
        {props.name}を追加
      </Button>
      </div>
  );
}


export default class ItemManager extends React.Component {
  
    constructor(props){
      super(props);

      this.cols = props.cols;

      this.state = {
        rows: []
      }
  
      this.process_name = props.name;

      this.textField = {}
  
      this.text_fields = (
        this.cols.map(col => (
            <TextField
            autoFocus
            label={col.ja_name}
            inputRef={el => this.textField[col.name] = el}
            fullWidth
            />
        ))
      );
    }
  
    add_process(){
      let new_row = {}
      this.cols.forEach(col => {
        new_row[col.name] = this.textField[col.name].value;
      });
      this.setState(state => ({
        rows: state.rows.concat(new_row),
      }));
    }
  
    render() {
      return(
        <div>
          <h3>{this.process_name}一覧</h3>
          <NewProcessDialog
            handleSubmit={(ret) => this.add_process(ret)}
            text_fields={this.text_fields}
            name={this.process_name}
          />
          <ProcessTable rows={this.state.rows} cols={this.cols} />
        </div>
      );
    }
}


