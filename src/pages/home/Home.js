import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Home = () => {
    return (
        <Grid container justify="left" xs={10}>
            <Grid item xs={10}>
                <Typography variant="h6">
                    Welcome to frisbee club!
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et enim ultrices, bibendum lorem id, convallis ante. Nullam ultricies lacus id nisl fermentum tristique. Fusce in convallis turpis. Maecenas arcu ante, convallis luctus egestas a, rhoncus eget enim. Praesent dictum sodales massa, a pellentesque nunc gravida non. Cras volutpat vehicula eleifend. Nullam molestie felis vel erat ornare iaculis. Mauris a commodo urna. Phasellus efficitur blandit diam ac gravida. In cursus, est id maximus consequat, mi eros interdum turpis, sit amet pulvinar nibh nisl vel lectus. In hac habitasse platea dictumst. Sed non molestie elit. Donec vitae pellentesque magna. Donec at facilisis sapien.
                </Typography>
                <Typography variant="h6">
                        How to Join?
                </Typography>
                <Typography variant="body1" paragraph>
                    Aenean ornare tincidunt nisi. Proin et erat sapien. Sed iaculis lacus sodales augue ultrices, et aliquet elit eleifend. In vel feugiat est. Phasellus commodo, magna id consequat sodales, odio sem lacinia urna, ut malesuada est libero sed ex. Donec eget sapien ornare turpis blandit suscipit et id ex. Morbi porta enim lacus, a volutpat mi pharetra eget. Fusce dictum metus at sem placerat gravida at vitae ante. Nulla facilisi. Vestibulum ac justo lacinia, mollis erat ut, pretium risus. Curabitur elementum hendrerit lacinia. Nullam metus lacus, varius et sapien vitae, mattis tristique arcu. Donec eu euismod turpis, a aliquet mi. Integer eget volutpat lectus. Sed sit amet quam non mi egestas dictum. In suscipit nisl at dui hendrerit, nec semper justo placerat.
                </Typography>
            </Grid>
        </Grid>
    )
};

export default Home;