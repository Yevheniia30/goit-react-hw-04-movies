import { Component } from 'react';
import s from './HomeView.module.css';
import moviesApi from '../../services/movies-api';
import MoviesList from '../../Components/MoviesList';

class HomeView extends Component {
  state = {
    movies: [],
  };

  // тренды
  componentDidMount() {
    moviesApi
      .fetchMovies()
      .then(movies => {
        this.setState({
          movies: [...movies],
        });
        // console.log(movies);
      })
      .catch(error => error.msg)
      .finally();
  }

  render() {
    const { movies } = this.state;
    // const { location } = this.props;
    return (
      <div>
        <h1>Trending Today</h1>
        <MoviesList movies={movies} />
        {/* <MoviesView /> */}
      </div>
    );
  }
}

export default HomeView;
