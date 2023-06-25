import styles from './About.module.scss';

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.subtitle}>
          Lorem Ipsum
        </p>
      </div>
    </div>
  );
};

export default About;