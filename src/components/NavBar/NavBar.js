import styles from './NavBar.module.scss';
import Container from '../Container/Container';
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
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/Favorite'>Favorite</a>
              </li>
              <li>
                <a href='/about'>About</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
