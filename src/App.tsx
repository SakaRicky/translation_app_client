import React, { useEffect} from 'react';
import './App.css';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Button,
  ThemeProvider
} from '@material-ui/core';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { Login } from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import { setUser, useStateValue, initUserState } from 'state';
import { theme } from 'theme';

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
          justifyContent: "space-between"
      },
      toolbar: theme.mixins.toolbar,
      logout: {
        backgroundColor: theme.palette.warning.main,
        borderRadius: theme.spacing(0.5)
      }
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

  const handleLogout = () => {
    dispatch(initUserState());
    window.localStorage.removeItem('loggedUser')
    history.push('/login')
  }

  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.appToolbar}>
                    <Typography variant="h6" noWrap>
                            TS_APP
                    </Typography>
                    <div className={classes.logout}>
                      <Button onClick={handleLogout}>
                        Logout
                      </Button>
                    </div>
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
    </ThemeProvider>
  );
}

export default App;
