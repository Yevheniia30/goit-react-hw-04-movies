import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

const MoviesList = ({ movies, location }) => {
  return (
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
            {original_title || original_name}{' '}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
    }),
  ),
};

export default withRouter(MoviesList);
