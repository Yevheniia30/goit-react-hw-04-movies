import { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';
import movieApi from '../../services/movies-api';
import CastView from '../../Components/CastView';
import ReviewsView from '../../Components/ReviewsView';
import s from './MovieDetailsView.module.css';
import defaultImage from '../../images/default-poster.png';
import routes from 'routes';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// import CastView from './CastView';
// import ReviewsView from './ReviewsView';

class MovieDetailsView extends Component {
  state = {
    // movie: null,
    id: '',
    poster_path: '',
    original_title: '',
    overview: '',
    genres: [],
    vote_average: '',
    cast: [],
    reviews: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    // инфо о фильме
    const { movieId } = this.props.match.params;
    this.setState({ isLoading: true });
    movieApi
      .fetchMovieDetals({ movieId })
      .then(movie => {
        this.setState({
          // распіляем полученный объект в стейт и его значения заменяют значения стейта
          ...movie,
        });
        //   console.log(movie);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    // жанры
    movieApi
      .fetchGenres()
      .then(genres => genres)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    // рецензии
    movieApi
      .fetchReviews({ movieId })
      .then(reviews => {
        this.setState({
          reviews: [...reviews],
        });
        // console.log(reviews);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    // актеры
    movieApi
      .fetchCast({ movieId })
      .then(({ cast }) => {
        this.setState({
          cast: [...cast],
        });
        //   console.log(cast);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  // ф-ция для кнопки go back
  handleGoBack = () => {
    const { location, history } = this.props;

    // location.state.from - это откуда мы сюда перешли и куда нужно вернуться при клике на кнопку назад

    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    //оператор optional chaining
    // усли нет location state from то вернет на routes.home
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      original_title,
      overview,
      genres,
      vote_average,
      cast,
      reviews,
      release_date,
    } = this.state;
    // const { movieId } = this.props.match.params;

    const { match } = this.props;
    // console.log(location.state);

    return (
      <div>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={s.go_back_btn}
        >
          <ArrowBackIcon className={s.icon} /> Go back
        </button>
        <div className={s.movie_card}>
          <img
            src={
              !poster_path
                ? defaultImage
                : `https://image.tmdb.org/t/p/w300/${poster_path}`
            }
            alt={original_title}
            width="300px"
          />
          <div className={s.movie_description}>
            <h2>
              {original_title} <span>({release_date})</span>{' '}
            </h2>
            <p>User score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.add_info}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/cast`,
                  state: {
                    from: '/',
                  },
                }}
                className={s.base}
                activeClassName={s.active}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${match.url}/reviews`,
                  state: {
                    from: '/',
                  },
                }}
                className={s.base}
                activeClassName={s.active}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Route
          path={`${match.path}/cast`}
          render={props => {
            return <CastView {...props} cast={cast} />;
          }}
        />

        <Route
          path={`${match.path}/reviews`}
          render={props => {
            return <ReviewsView {...props} reviews={reviews} />;
          }}
        />
      </div>
    );
  }
}

export default MovieDetailsView;
