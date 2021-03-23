import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { pages } from './utils/pagesList';
import Header from './components/Header';
import { StylesProvider, Grid, CssBaseline } from '@material-ui/core';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Router>
        <Header pages={pages} />
        <Grid container justify="center" xs={10} className={"Content"}>
          <Switch>
            {pages.map((page, key) => (
              <Route exact path={page.url} key={key} component={page.cont} />
            ))}
          </Switch>
        </Grid>
      </Router>
    </StylesProvider>
  );
}

export default App;
