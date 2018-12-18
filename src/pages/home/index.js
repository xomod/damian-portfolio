import React, { Component } from "react";
import { withStyles, Typography, Divider, Card, CardActions, CardContent, Button } from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    marginTop: "2.5vh",
    marginBottom: "2.5vh",
    maxWidth: "80vw",
    marginLeft: "10vw",
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
    <br />
      <CardContent>
        <Typography variant="h5" component="h2">
          About Me
        </Typography>
        <Typography component="p">
          When I learn to program, I will be able to write that I am a programmer.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);