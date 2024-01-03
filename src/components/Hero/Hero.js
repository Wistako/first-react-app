import PageTitle from '../PageTitle/PageTitle';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle title={'My first React App'} >A simple to-do app, with lists, columns and card</PageTitle>
    </div>
  );
};

export default Hero;