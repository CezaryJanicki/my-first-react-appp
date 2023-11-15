import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle.js';

const About = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>About</PageTitle>
      <p className={styles.subtitle}>
        About this app

      </p>
    </div>
  );
};

export default About;
