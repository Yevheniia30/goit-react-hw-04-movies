import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import NotFoundView from '../../views/NotFoundView';
import MoviesList from '../../Components/MoviesList';
import moviesApi from '../../services/movies-api';
import s from './MoviesView.module.css';

class MoviesView extends Component {
  state = {
    movies: [],
    query: '',
    isLoading: false,
    error: null,
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
        this.props.history.push({
          ...this.props.location,
          pathname: this.props.location.pathname,
          search: `?query=${query}`,
        });
        // console.log(movies);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    this.setState({ query: '' });
  };

  render() {
    const { query, movies, isLoading, error } = this.state;
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
            className={s.search_input}
          />
          <button type="submit" className={s.search_btn}>
            Search
          </button>
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

        {error ? (
          <p>Nothing was found. Please enter more specific value</p>
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    );
  }
}

export default MoviesView;
