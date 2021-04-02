import { Component } from 'react';
import { Link } from 'react-router-dom';

import s from './HomeView.module.css';
import moviesApi from '../../services/movies-api';

class HomeView extends Component {
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
        // console.log(movies);
      })
      .catch(error => error.msg)
      .finally();
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <div>
        <h1>Trending Today</h1>
        <ul className={s.list}>
          {movies.map(({ id, original_title, original_name }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                  },
                }}
              >
                {/* <Link to={`${this.props.match.url}/${id}`}> */}
                {original_title || original_name}{' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomeView;
