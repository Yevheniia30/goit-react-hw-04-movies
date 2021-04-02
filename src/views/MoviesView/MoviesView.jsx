import React, { Component } from 'react';
import MoviesList from '../../Components/MoviesList';
import moviesApi from '../../services/movies-api';

class MoviesView extends Component {
  state = {
    movies: [],
    query: '',
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
    moviesApi
      .fetchByKeyWord({ query })
      .then(movies => {
        this.setState({
          movies: movies,
        });
        // console.log(movies);
      })
      .catch(error => error.msg)
      .finally();

    this.setState({ query: '' });
  };

  render() {
    const { query, movies } = this.state;
    return (
      <div>
        <h1>MoviesPage</h1>
        <form onSubmit={this.handleSearchMovie}>
          <input type="text" value={query} onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default MoviesView;
