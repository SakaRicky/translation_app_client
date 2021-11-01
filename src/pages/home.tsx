import React from 'react'
import { Container, makeStyles, Typography, Paper, Grid } from '@material-ui/core'
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => {
    return {
        root: {
            paddingTop: theme.spacing(10)
        },
        paper: {
            padding: theme.spacing(1),
            height: "500px",
            // '& div': {
            //     display: "inline-block"
            // }
        },
        upload: {
            padding: theme.spacing(2),
            textAlign: "left",
            display: "flex",
            flexDirection: "row"
        },
        uploadIcon: {
            height: theme.spacing(5),
            width: theme.spacing(5),
            pointer: "cursor"
        },
        document: {
            height: theme.spacing(10),
            width: theme.spacing(10),
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        }
    }
})

function Home() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Container>
                <div className={classes.upload}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={classes.uploadIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                </div>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="#">
                                <DescriptionIcon className={classes.document} />
                                <Typography>Document Name</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    )
}

export default Home
