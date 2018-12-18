import React, { Component } from "react";
import { withStyles, Typography, Divider } from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: "2.5vh",
    marginBottom: "2.5vh",
    maxWidth: "80vw",
    marginLeft: "10vw",
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        
      </div>
    );
  }
}

export default withStyles(styles)(Home);
