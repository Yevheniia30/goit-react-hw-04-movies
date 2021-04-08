import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className={s.nav_list}>
      <NavLink
        exact
        to={routes.home}
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.movies}
        className={[s['base'], s['link']].join(' ')}
        activeClassName={s.active}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
