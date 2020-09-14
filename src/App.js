import React, { Fragment, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./main.scss";
import Header from "./components/Header";
import Grid from "./components/Grid";
import GridSearch from "./components/GridSearch";
import { Context } from "./context/MovieContext";
function App() {
  const data = useContext(Context).state;
  const dataSearch = useContext(Context).dataSearch;

  return (
    <Router>
      <Fragment>
        <Header />

        <Switch>
          <Route path="/top-rated">
            {" "}
            <Grid
              title="Top rated movies"
              topRated={data.topRated}
              loading={data.loading}
            />{" "}
          </Route>

          <Route path="/popular">
            {" "}
            <Grid
              title="Popular movies"
              topRated={data.popular}
              loading={data.loading}
            />{" "}
          </Route>
          <Route path="/upcoming">
            {" "}
            <Grid
              title="upcoming movies"
              topRated={data.upcoming}
              loading={data.loading}
            />{" "}
          </Route>
          <Route path="/search">
            {" "}
            <Grid
              title={`your results for ${data.search}`}
              topRated={dataSearch.searchData}
              loading={dataSearch.loading}
            />{" "}
          </Route>
          <Route path="/details/:id">
            <GridSearch />
          </Route>
        </Switch>
        <Redirect from="/" to="/top-rated" />
      </Fragment>
    </Router>
  );
}

export default App;
