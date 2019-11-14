import React from 'react';
import {
  Typography,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';


// This allows custom styling of the buttons, over-riding the root theme
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const BigBar = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        size="large"
        component={Link}
        to="/suggestion"
        className={classes.button}
      >
        Explore Books
      </Button>
      <Button
        size="large"
        component={Link}
        to="/booklist"
        className={classes.button}
      >
        Favorites
      </Button>
      <Button
        size="large"
        component={Link}
        to="/following"
        className={classes.button}
      >
        Following
      </Button>
      <Button size="large" href="/auth/logout" className={classes.button}>
        Logout
      </Button>
    </div>
  );
};

export default BigBar;
