import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './CastView.module.css';
import defaultImage from '../../images/default.jpg';

class CastView extends Component {
  render() {
    const { cast } = this.props;

    return (
      <div>
        <ul className={s.cast_list}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  !profile_path
                    ? defaultImage
                    : `https://image.tmdb.org/t/p/w200/${profile_path}`
                }
                alt={name}
                width="200px"
              ></img>
              <p className={s.cast_name}>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CastView.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    }),
  ),
};

export default CastView;
