import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav className={styles.background}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.icon}>
            <a href='/'>
              <span className={styles.icon + ' fa fa-tasks'}></span>
            </a>
          </div>
          <ul className={styles.main}>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/favourite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;