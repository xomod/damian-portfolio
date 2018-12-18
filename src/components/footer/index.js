import React, { Component } from 'react';
import {withStyles, Typography} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

const styles = theme => ({
    root: {
        width: "100vw",
        height: "64px",
        background: grey[700]
    },
    content: {
        paddingLeft: "5vw",
        paddingRight: "5vw"
    },

    copyright: {
        lineHeight: "64px",
        color: "#FFF"
    }
});

class Footer extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.content}>
                    <Typography className={classes.copyright}>Copyright (c) 2018 Mike Eling</Typography>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);