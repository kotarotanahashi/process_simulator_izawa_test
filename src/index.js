import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CssBaseline from '@material-ui/core/CssBaseline'
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


class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function createStock(name) {
  return { name };
}

const rows = [
  createStock("start")
];


function SimpleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

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

function StockTable(props){
  let header_row = (
    <TableRow>
      <TableCell>Name</TableCell>
    </TableRow>
  );

  let body_rows = (
    props.rows.map((row) => (
      <TableRow key={row.name}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
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


class StockManager extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      rows: [
        createStock('Frozen yoghurt'),
        createStock('Ice cream sandwich')
      ],
      name: ""
    }
    this.process_name = "Stock";

    this.text_fields = (
      <TextField
        autoFocus
        margin="dense"
        id="stock_name"
        label="Stock名"
        onChange={e => this.setState({name: e.target.value})}
        fullWidth
      />
    );
  }

  add_process(ret){
    let new_row = createStock(this.state.name);
    this.setState(state => ({
      rows: state.rows.concat(new_row),
    }));
  }

  render() {
    return (
      <div>
        <h3>{this.process_name}一覧</h3>
        <NewProcessDialog
          handleSubmit={(ret) => this.add_process(ret)}
          text_fields={this.text_fields}
          name="Stock"
        />
        <StockTable rows={this.state.rows} />
      </div>
    );
  }
}


class EndPointManager extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      rows: [
        this.createEndPoint('end_point')
      ]
    }

    this.process_name = "EndPoint";
    this.name = null;

    this.text_fields = (
      <TextField
        autoFocus
        margin="dense"
        id="stock_name"
        label="EndPoint名"
        onChange={e => {this.name = e.target.value}}
        fullWidth
      />
    );
  }

  createEndPoint(name) {
    return { name };
  }

  add_process(name){
    let new_row = this.createEndPoint(name);
    this.setState(state => ({
      rows: state.rows.concat(new_row),
    }));
  }

  render() {
    return (
      <div>
        <h3>{this.process_name}一覧</h3>
        <NewProcessDialog
          handleSubmit={(ret) => this.add_process(ret)}
          text_fields={this.text_fields}
          name="EndPoint"
        />
        <StockTable rows={this.state.rows} />
      </div>
    );
  }
}

class App extends React.Component {
  
  render(){  
    return(
      <div>
        <StockManager />
        <br />
        <EndPointManager />
      </div>
    );
  };
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

