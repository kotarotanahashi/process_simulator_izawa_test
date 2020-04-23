import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {NewProcessDialog, ProcessTable} from './item_manager.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3>シミュレーション実行結果</h3>
      <p>全ての工程が終わる時刻: 18:10</p>
      <h4>プロセスごとの結果</h4>
      
        {props.process_histories.map(process_history =>
            <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>{process_history.name}の実行履歴</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ProcessTable rows={process_history.rows} cols={process_history.cols} />
            </ExpansionPanelDetails>
            </ExpansionPanel>
        )}
        
    </div>
  );
}