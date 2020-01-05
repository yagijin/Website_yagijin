import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    footer: {
      backgroundColor: "#3F51B5",
      padding: theme.spacing(3),
    },
}));

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Jin Yagi '}
        {new Date().getFullYear()}
        {' - All Rights Reserved. '}
      </Typography>
    );
}

export default function MainFooter() {
    const classes = useStyles();
  
    return (
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            <Link to="/privacypolicy">
              <font size="3">Privacy Policy</font>
            </Link>
          </Typography>
          <Copyright />
        </footer>
    );
  }
