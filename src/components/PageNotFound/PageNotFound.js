import styles from './PageNotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const PageNotFound = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>404: Page not found</PageTitle>
        </div>
    </div>
  );
};

export default PageNotFound;