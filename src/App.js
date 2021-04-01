import { Route, NavLink, Switch } from 'react-router-dom';
import s from './App.module.css';
import MoviesView from './views/MoviesView';

import NotFoundView from './views/NotFoundView';
import HomeView from './views/HomeView';
import MovieDetailsView from './views/MovieDetailsView';
import routes from './routes';
import AppBar from './Components/AppBar';

const App = () => {
  return (
    <div className={s.App}>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route exact path={routes.movies} component={MoviesView} />
        <Route path={routes.movieDetails} component={MovieDetailsView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  );
};

export default App;
