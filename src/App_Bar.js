import React from 'react';
import {AppBar,Toolbar,Typography,Button,IconButton,Hidden,Drawer,List,ListItem,ListItemIcon,ListItemText,} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const userName = "Zaryab"; // replace with actual user name

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between', // Align buttons to the right
    alignItems: 'center', // Vertically center buttons and welcome message
    height: '60px', // Adjust toolbar height if needed
  },
  button: {
    minWidth: 0,
    borderRadius: 8,
    margin: theme.spacing(1),
    boxShadow: 'none',
    textTransform: 'none',
    border: '1px solid #ddd', // Optional border
    backgroundColor: theme.palette.background.default, // Match background color
    color: theme.palette.text.primary, // Use primary text color
    padding: theme.spacing(1, 2), // Adjust button padding
    '&:hover': {
      backgroundColor: 'linear-gradient(to right, #f0f7ff, #d9e6f3)', // Adjusted gradient
      color: theme.palette.primary.main, // Change hover text color
      border: '1px solid #ccc', // Optional border hover effect
    },
  },
  mobileButton: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));

export default function ResponsiveAppBar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div>
      <AppBar position="static" style={{ background: '#efeff7 ', color: '#000' }}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Welcome Back, {userName}
          </Typography>
          <Hidden mdDown>
            <Button className={classes.button}>
              <HomeIcon /> Home
            </Button>
            <Button className={classes.button}>
              <DashboardIcon /> Dashboard
            </Button>
            <Button className={classes.button}>
              <SettingsIcon /> Analytics
            </Button>
            <Button className={classes.button}>
              <NotificationsIcon /> Notifications
            </Button>
          </Hidden>
          <Hidden mdUp>
            <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" className={classes.mobileButton} />
                </ListItem>
                <ListItem button component={Link} to="/dashboard">
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" className={classes.mobileButton} />
                </ListItem>
                <ListItem button component={Link} to="/analytics">
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Analytics" className={classes.mobileButton} />
                </ListItem>
                <ListItem button component={Link} to="/notifications">
                  <ListItemIcon>
                    <NotificationsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" className={classes.mobileButton} />
                </ListItem>
              </List>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
