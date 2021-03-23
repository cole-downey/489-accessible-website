import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

/*
const StyledAppBar = styled(AppBar)`
  background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);
  padding: 1em;
`;

const StyledTab = styled(Tab)`
  text-color: "#ffffff";
`;
const StyledTabs = styled(Tabs)`
`;

const Title = styled(Typography)`
  padding-left: 0.5em;
  padding-right:0.5em;
  padding-bottom: 0.15em;
`;

const StyledTitleButton = styled(ButtonBase)`
  font-weight: 300;
  font-size: 3em;
  border: 2px solid ${props => props.buttonBorder};
`;
*/

const Header = (props) => {
  function getValue(pages) {
    // iterates through pages list to find which value is current
    var value = -1;
    pages.forEach(element => {
      if (`#${element.url}` === window.location.hash) {
        value = element.index;
      }
    });
    return value;
  }
  const pages = props.pages;
  const [value, setValue] = useState(getValue(pages));
  const handleClick = () => {
    setValue(getValue(pages));
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Grid container justify="center">
        {/*
          <Grid item>
            <Typography paragraph
              color="secondary" >
              Cole Downey
              </Typography>
          </Grid>
          */}
          <Grid item xs={12}>
            <Tabs
              variant={useMediaQuery('(min-width:800px)') ? "fullWidth" : "scrollable"}
              value={value}
              centered
              scrollButtons="on"
              onClick={handleClick}
              //indicatorColor="primary"
            >
              {pages.map((page) => (
                (page.index >= 0) ? <Tab label={<Typography variant="button" >{page.title}</Typography>}
                  to={page.url} key={page.index} component={Link} textColor="primary" aria-label={page.title}/> : null
              )
              )}
            </Tabs>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar >
  );
}

export default Header;