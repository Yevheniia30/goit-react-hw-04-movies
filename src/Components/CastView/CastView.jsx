import { Component } from 'react';
import s from './CastView.module.css';
import defaultImage from '../../images/default.jpg';

class CastView extends Component {
  state = {};

  componentDidMount() {
    // console.log(this.props);
  }

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

export default CastView;
