import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const PageNotFound = () => {
  return (
    <div>
      <div className={styles.PageNotFound}>
        <PageTitle>404: Page not found</PageTitle>
        <p className={styles.subtitle}>Unfortunately</p>
        </div>
    </div>
  );
};

export default PageNotFound;
