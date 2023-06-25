import styles from './Favourites.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorites = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>Favourites</PageTitle>
        <p className={styles.subtitle}>
          Lorem ipsum
        </p>
      </div>
    </div>
  );
};

export default Favorites;