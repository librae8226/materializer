import React from 'react';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import SVGIconNavigationApps from 'material-ui/svg-icons/navigation/apps'
import SVGIconNavigationRight from 'material-ui/svg-icons/navigation/chevron-right'
import SVGIconNavigationLeft from 'material-ui/svg-icons/navigation/chevron-left'
import SVGIconActionInfo from 'material-ui/svg-icons/action/info'
import SVGIconActionDashboard from 'material-ui/svg-icons/action/dashboard'
import SVGIconActionHome from 'material-ui/svg-icons/action/home'
import SVGIconContentCreate from 'material-ui/svg-icons/content/create'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Main from './Main';

import {
  deepOrange500,
  grey800,
  cyan500,
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const styles = {
  profile: {
    backgroundColor: cyan500,
    lineHeight: '64px',
    fontSize: '20px',
  },
  avatar: {
    marginRight: 20,
  },
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
    this.state = {
      open: false,
      content: '',
      openDialogAbout: false,
      openDialogAvatar: false,
    };
    this.name = props.name;
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  handleDialogAboutOpen = () => {
    this.setState({openDialogAbout: true});
  }

  handleDialogAboutClose = () => {
    this.setState({openDialogAbout: false});
  }

  handleDialogAvatarOpen = () => {
    this.setState({openDialogAvatar: true});
  }

  handleDialogAvatarClose = () => {
    this.setState({openDialogAvatar: false});
  }

  handleDialogAvatarSubmit= () => {
    this.handleDialogAvatarClose();
  }

  handleSelectAvatar = () => {
    this.handleDialogAvatarOpen();
  }

  handleSelectOverview = () => {
    var url = ''
    this.setState({content: url});
    this.handleClose();
    console.log(this.state);
  }

  handleSelectNodeREDUI = () => {
    var url = 'http://docker.accrete.org:8000/red/ui'
    this.setState({content: url});
    this.handleClose();
    console.log(this.state);
  }

  handleSelectNodeRED = () => {
    var url = 'http://docker.accrete.org:8000/red'
    this.setState({content: url});
    this.handleClose();
    console.log(this.state);
  }

  handleSelectAbout = () => {
    this.handleDialogAboutOpen();
    console.log('name: ' + this.name);
  }

  handleSelectHome= () => {
    location.href = 'http://linkgo.io';
  }

  render() {
    const dialogAboutActions = [
      <FlatButton
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDialogAboutClose}
      />,
    ];
    const dialogAvatarActions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleDialogAvatarClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleDialogAvatarSubmit}
      />,
    ];
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Dialog
            title="About Materilizer"
            actions={dialogAboutActions}
            modal={false}
            open={this.state.openDialogAbout}
            onRequestClose={this.handleDialogAboutClose}
          >
            Materilizer, plays the role of a web container.
          </Dialog>
          <Dialog
            title="Profile"
            actions={dialogAvatarActions}
            modal={false}
            open={this.state.openDialogAvatar}
            onRequestClose={this.handleDialogAvatarClose}
          >
            Edit profile here.
            <br/>
            Name: {this.name}
          </Dialog>
          <IconButton style={styles.menu} onTouchTap={this.handleToggle}>
            <SVGIconNavigationRight color={'white'} />
          </IconButton>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >

            <MenuItem onTouchTap={this.handleSelectAvatar} style={styles.profile}>
              <Avatar backgroundColor={grey800} style={styles.avatar}>L</Avatar>
              Librae
            </MenuItem>

            <Divider />

            <MenuItem onTouchTap={this.handleSelectOverview} leftIcon={<SVGIconNavigationApps/>}>
              Overview
            </MenuItem>

            <MenuItem onTouchTap={this.handleSelectNodeREDUI} leftIcon={<SVGIconActionDashboard />}>
              Node-RED UI
            </MenuItem>

            <MenuItem onTouchTap={this.handleSelectNodeRED} leftIcon={<SVGIconContentCreate />}>
              Node-RED Editor
            </MenuItem>

            <Divider />

            <MenuItem onTouchTap={this.handleSelectAbout} leftIcon={<SVGIconActionInfo />}>
              About
            </MenuItem>

            <MenuItem onTouchTap={this.handleSelectHome} leftIcon={<SVGIconActionHome />}>
              linkgo.io
            </MenuItem>

            <IconButton style={styles.hide} onTouchTap={this.handleToggle}>
              <SVGIconNavigationLeft color={'white'} />
            </IconButton>
          </Drawer>
          {
            this.state.content !== '' ?
            <div>
              <object style={styles.container} type='text/html' data={this.state.content} />
            </div> :
            <Main />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Master;
