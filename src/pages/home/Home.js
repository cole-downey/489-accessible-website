import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import './Home.css';

const Home = () => {
    return (
        <Grid container justify="left" xs={10}>
            <Grid item xs={10}>
                <Typography variant="h6">
                    Welcome to Ultimate Frisbee Club!
                </Typography>
                <Typography variant="body1" paragraph>
                    This is the premier club for building skills, meeting other players, and playing competive Ultimate Frisbee games.
                </Typography>
                <Typography variant="h6">
                    How to Join?
                </Typography>
                <Typography variant="body1" paragraph>
                    Click on the "Join" page and fill out the email form. We will contact with you with registration info!
                </Typography>
                <Typography variant="h6">
                    Want more info on ultimate?
                </Typography>
                <Typography variant="body1" paragraph>
                    Click on the link below to visit the USA Ultimate website!
                </Typography>
                <Typography variant="body1" paragraph>
                    <Link href="https://usaultimate.org/about/">
                        USA Ultimate
                    </Link>
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <img
                    src="https://api.time.com/wp-content/uploads/2015/08/ultimate-frisbee.jpg"
                    alt="2 men diving for a frisbee"
                    height="300"
                />
            </Grid>
        </Grid>
    )
};

export default Home;