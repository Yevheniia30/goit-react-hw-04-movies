import React, { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import s from './App.module.css';
// import MoviesView from './views/MoviesView';
// import NotFoundView from './views/NotFoundView';
// import HomeView from './views/HomeView';
// import MovieDetailsView from './views/MovieDetailsView';
import routes from './routes';
import AppBar from './Components/AppBar';
import ClipLoader from 'react-spinners/ClipLoader';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView.jsx' /* webpackChunkName: "home-page" */),
);

const MoviesView = lazy(() =>
  import(
    './views/MoviesView/MoviesView.jsx' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView/MovieDetailsView.jsx' /* webpackChunkName: "moviedetails-page" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView.jsx' /* webpackChunkName: "notfound-page" */
  ),
);

const App = () => {
  return (
    <div className={s.App}>
      <AppBar />

      {/* пока идет саспенс показываем спиннер */}
      <Suspense fallback={<ClipLoader />}>
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
          <Route component={NotFoundView} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
