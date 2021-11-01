import React, { useEffect} from 'react';
import './App.css';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography
} from '@material-ui/core';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Login } from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import { setUser, useStateValue } from 'state';

const useStyles = makeStyles(theme => {
  return {
      root: {
          marginTop: theme.spacing(10)
      },
          appBar: {
          zIndex: theme.zIndex.drawer + 1,
      },
          appToolbar: {
          display: "flex",
          justifyContent: "center"
      },
      toolbar: theme.mixins.toolbar,
      paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      },
          avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
      },
      form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
      },
      submit: {
          margin: theme.spacing(3, 0, 2),
      },
  }})

function App() {
  const classes = useStyles();
  const [stateValue, dispatch] = useStateValue();
  const history = useHistory();  

  const loggedUser = window.localStorage.getItem('loggedUser');
  useEffect(() => {
    if (loggedUser) {
      const user = JSON.parse(loggedUser);
      dispatch(setUser(user));
      history.push('/');
    } else if (stateValue) {
      return
    } else {
      history.push('/login');
    }
  }, [])

  return (
    <div className="App">
      <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.appToolbar}>
                <Typography variant="h6" noWrap>
                    TS_APP
                </Typography>
            </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
    </div>
  );
}

export default App;
