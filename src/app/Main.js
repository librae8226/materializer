/**
 * This is a sample component not being used!
 *
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import FlatButton from 'material-ui/FlatButton';
import SVGIconActionPower from 'material-ui/svg-icons/action/power-settings-new'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import {
  deepOrange500,
  grey200,
  cyan500,
} from 'material-ui/styles/colors';

const styles = {
  container: {
    textAlign: 'center',
    //paddingTop: '15%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    margin: 6,
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
  card: {
    textAlign: 'center',
    width: '240px',
    height: '300px',
  },
  paper: {
    width: 240,
    height: 300,
    margin: 10,
    float: 'left',
  },
  heading: {
    fontSize: 20,
    paddingTop: 19,
    marginBottom: 13,
    letterSpacing: 0,
    backgroundColor: grey200,
    textAlign: 'center',
    margin: 0,
    padding: 0,
    lineHeight: '50px',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleTouchTapStart = this.handleTouchTapStart.bind(this);
    this.handleTouchTapStop = this.handleTouchTapStop.bind(this);

    this.state = {
      open: false,
      status: 'hide',
      ready: false, // get from real status
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTapFire() {
  }

  handleTouchTap() {
    this.setState({
      open: true,
    });
  }

  doStart() {
    this.setState({status: 'loading'});
    setTimeout(this.onDoStarted.bind(this), 2000);
  }

  onDoStarted() {
    this.setState({status: 'hide', ready: true});
  }

  doStop() {
    this.setState({status: 'loading'});
    setTimeout(this.onDoStopped.bind(this), 1000);
  }

  onDoStopped() {
    this.setState({status: 'hide', ready: false});
  }

  handleTouchTapStop() {
    this.doStop();
    console.log(this.state);
  }

  handleTouchTapStart() {
    this.doStart();
    console.log(this.state);
  }

  render() {
    const standardActions = (
      <div>
        <RaisedButton label="Think Over" primary={true} style={styles.button} onTouchTap={this.handleRequestClose} />
        <FlatButton label="OK, Fire" secondary={true} style={styles.button} onTouchTap={this.handleTouchTapFire} />
      </div>
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Dialog
            open={this.state.open}
            title="Super Secret World"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            Are you sure ready to take the adventure?
          </Dialog>
          <Paper style={styles.paper}>
            <h1 style={styles.heading}>Material-UI</h1>
            <h2>the cloud of REDs</h2>
            <RaisedButton
              label="Super Secret World"
              secondary={true}
              onTouchTap={this.handleTouchTap}
            />
          </Paper>
          <Paper style={styles.paper}>
            <h1 style={styles.heading}>Power</h1>
            <FlatButton
              label={this.state.ready ? "Stop" : "Start"}
              primary={!this.state.ready}
              secondary={this.state.ready}
              onTouchTap={this.state.ready ? this.handleTouchTapStop : this.handleTouchTapStart}
              icon={<SVGIconActionPower />}
            />
            <RefreshIndicator
              size={30}
              left={10}
              top={8}
              status={this.state.status}
              style={styles.refresh}
            />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
