import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import SVGIconNavigationRight from 'material-ui/svg-icons/navigation/chevron-right'
import SVGIconNavigationLeft from 'material-ui/svg-icons/navigation/chevron-left'
import SVGIconActionInfo from 'material-ui/svg-icons/action/info'
import SVGIconActionDashboard from 'material-ui/svg-icons/action/dashboard'
import SVGIconContentCreate from 'material-ui/svg-icons/content/create'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  menu: {
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  hide: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  container: {
    width: '100%',
    height: '100%',
    zIndex: 0,
    top: 0,
    left: 0,
    position: 'absolute',
  },
};

class Master extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, content: '#'};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleSelectNodeREDUI = () => {
    var url = 'http://docker.accrete.org:8000/red/ui'
    this.setState({content: url});
    console.log(this.state);
  }
  handleSelectNodeRED = () => {
    var url = 'http://docker.accrete.org:8000/red'
    this.setState({content: url});
    console.log(this.state);
  }
  handleSelectAbout = () => {
    var url = 'http://linkgo.io';
    this.setState({content: url});
    console.log(this.state);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <IconButton style={styles.menu} onTouchTap={this.handleToggle}>
            <SVGIconNavigationRight color={'white'} />
          </IconButton>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <AppBar title='AppBar' />
            <MenuItem onTouchTap={this.handleSelectNodeREDUI} leftIcon={<SVGIconActionDashboard />}>Node-RED UI</MenuItem>
            <MenuItem onTouchTap={this.handleSelectNodeRED} leftIcon={<SVGIconContentCreate />}>Node-RED Editor</MenuItem>
            <Divider />
            <MenuItem onTouchTap={this.handleSelectAbout} leftIcon={<SVGIconActionInfo />}>About</MenuItem>
            <IconButton style={styles.hide} onTouchTap={this.handleToggle}>
              <SVGIconNavigationLeft color={'white'} />
            </IconButton>
          </Drawer>
          <div>
            <object style={styles.container} type='text/html' data={this.state.content} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Master;

/*
 * RETAINED STUFFS
 * <object style={styles.container} type='text/html' data='http://docker.accrete.org:8000/red' />
 */
