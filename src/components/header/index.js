import React, { Component } from 'react';
import {withStyles, Typography} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: "100vw",
        height: "64px",
        background: theme.palette.primary[300]
    },
    content: {
        paddingLeft: "5vw",
        paddingRight: "5vw"
    },
    title: {
        lineHeight: "64px",
        color: "#FFF"
    }
});

class Header extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <Typography variant="title" className={classes.title}>react-website-boilerplate</Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Header);