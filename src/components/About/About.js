import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>
          Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default About;