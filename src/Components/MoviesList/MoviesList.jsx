import { Link, withRouter } from 'react-router-dom';

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

export default withRouter(MoviesList);
