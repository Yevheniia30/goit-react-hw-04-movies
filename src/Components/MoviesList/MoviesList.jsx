import { Component } from 'react';
import moviesApi from '../../services/movies-api';
import MoviesItem from '../MoviesItem';

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    moviesApi
      .fetchMovies()
      .then(movies => {
        this.setState({
          movies: movies,
        });
        console.log(movies);
      })
      .catch(error => error.msg)
      .finally();

    // moviesApi
    //   .fetchByKeyWord()
    //   .then(movies => {
    //     this.setState({
    //       movies: movies,
    //     });
    //     console.log(movies);
    //   })
    //   .catch(error => error.msg)
    //   .finally();

    // moviesApi
    //   .genres()
    //   .then(movies => {
    //     this.setState({
    //       movies: movies,
    //     });
    //     console.log(movies);
    //   })
    //   .catch(error => error.msg)
    //   .finally();
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <h2>Movies</h2>
        <ul>
          {movies.map(
            ({
              id,
              poster_path,
              title,
              overview,
              vote_average,
              genre_ids,
              release_date,
            }) => (
              <MoviesItem
                key={id}
                title={title}
                poster={poster_path}
                overview={overview}
                userScore={vote_average}
                genres={genre_ids}
                date={release_date}
              />
            ),
          )}
        </ul>
      </div>
    );
  }
}

export default Movies;
