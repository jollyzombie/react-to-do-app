import styles from './NavBar.module.scss';
import Container from '../Container/Container';

import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav_wrapper}>
          <div className={styles.icon}>
            <a href='/' className='fa fa-tasks'></a>
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/favorite'>
                  Favorite
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/about'>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
