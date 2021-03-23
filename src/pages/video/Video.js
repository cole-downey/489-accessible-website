import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio_desc from '../../assets/audio_desc_frisbee.m4a';

const Video = () => {
    return (
        <Grid item container xs={10} spacing={3}>
            <Grid item xs={12}>
                <iframe width="1009" height="568" src="https://www.youtube.com/embed/E_I45RdNY4g"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    aria-label="frisbee-video"
                    allowfullscreen>
                </iframe>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">
                    Click below for Audio Description
                </Typography>
                <ReactAudioPlayer
                    src={audio_desc}
                    controls
                    aria-label="audio-desc-player"
                />
            </Grid>
        </Grid>
    )
};

export default Video;