import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import MoviesList from '../../Components/MoviesList';
import moviesApi from '../../services/movies-api';

class MoviesView extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false,
  };

  // поиск по ключевому слову
  handleChange = e => {
    this.setState({
      query: e.currentTarget.value,
    });
  };

  handleSearchMovie = e => {
    e.preventDefault();
    const { query } = this.state;
    this.setState({ isLoading: true });
    moviesApi
      .fetchByKeyWord({ query })
      .then(movies => {
        this.setState({
          movies: [...movies],
        });
        // console.log(movies);
      })
      .catch(error => error.msg)
      .finally(() => this.setState({ isLoading: false }));

    this.setState({ query: '' });
  };

  render() {
    const { query, movies, isLoading } = this.state;
    return (
      <div>
        <h1>MoviesPage</h1>
        <form onSubmit={this.handleSearchMovie}>
          <input
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        {isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default MoviesView;
