import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './App.module.css';
import routes from './routes';
import AppBar from './Components/AppBar';
import Loader from 'react-loader-spinner';

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
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={60}
            width={60}
            timeout={3000}
          />
        }
      >
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
