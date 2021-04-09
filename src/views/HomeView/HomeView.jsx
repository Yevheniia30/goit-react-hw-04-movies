import { Component } from 'react';
// import s from './HomeView.module.css';
import moviesApi from '../../services/movies-api';
import MoviesList from '../../Components/MoviesList';
import NotFoundView from '../../views/NotFoundView';
import Loader from 'react-loader-spinner';

class HomeView extends Component {
  state = {
    movies: [],
    error: null,
    isLoading: false,
  };

  // тренды
  componentDidMount() {
    this.setState({ isLoading: true });

    moviesApi
      .fetchMovies()
      .then(movies => {
        this.setState({
          movies: [...movies],
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { movies, isLoading, error } = this.state;
    // const { location } = this.props;
    return (
      <div>
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {error ? (
          <NotFoundView />
        ) : (
          <div>
            <h1>Trending Today</h1>
            <MoviesList movies={movies} />
          </div>
        )}
      </div>
    );
  }
}

export default HomeView;
