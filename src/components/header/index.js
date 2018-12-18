import React, { Component } from 'react';
import {withStyles, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
    flexGrow: 1,
    },
    grow: {
    flexGrow: 1,
    },
    menuButton: {
    marginLeft: -12,
    marginRight: 20,
    },
    });
    


function ButtonAppBar(props) {
    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Damian Błochowiak
            </Typography>
            <Button color="inherit">ABOUT ME</Button>
            <Button color="inherit">PORTFOLIO</Button>
            <Button color="inherit">CONTACT</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default withStyles(styles)(ButtonAppBar);