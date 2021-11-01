import React, { useState } from 'react';
import { 
    Avatar,
    CssBaseline,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    makeStyles,
    TextField,
    FormControlLabel,
    Checkbox,
    Button
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { getUser } from '../services';
import { User } from '../types';
import { useHistory } from "react-router-dom";
import { useStateValue, setUser } from '../state';
  
  
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
  
  // Not fully functional as I need to implement the state using context api
  export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [stateValue, dispatch] = useStateValue();
    const classes = useStyles();
    const history = useHistory();
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {
        email: email,
        password: password
    }
    try {
        const loggedUser = await getUser(data);
        if (rememberMe) {
            window.localStorage.setItem('loggedUser', JSON.stringify(loggedUser))   
        }
        dispatch(setUser(loggedUser));
        history.push('/');
    } catch (error: any) {
        console.log(error);
        }
    };      
  
    return (
        <Container className={classes.root} component="main" maxWidth="xs">
          <CssBaseline />
          
            <Box sx={{ mt: 1 }}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Sign in
                        </Typography>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)} />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        </form>
                    </div>
                    <Box mt={8}>
                    </Box>
                    </Container>
            </Box>
        </Container>
    )
}