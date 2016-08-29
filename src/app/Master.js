import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import NavigationRight from 'material-ui/svg-icons/navigation/chevron-right'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';

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
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  handleSelectRED = () => {
    this.handleClose();
  }
  handleSelectAbout = () => {
    this.handleClose();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <IconButton style={styles.menu} onTouchTap={this.handleToggle}>
            <NavigationRight color={'white'} />
          </IconButton>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onTouchTap={this.handleSelectRED}>RED</MenuItem>
            <MenuItem onTouchTap={this.handleSelectAbout}>About</MenuItem>
          </Drawer>
          <div>
            <object style={styles.container} type="text/html" data="http://docker.accrete.org:8000/red" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Master;

/*
 * RETAINED STUFFS
 * <object style={styles.container} type="text/html" data="http://docker.accrete.org:8000/red" />
 */
