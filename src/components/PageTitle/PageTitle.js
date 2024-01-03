import styles from './PageTitle.module.scss';

const PageTitle = props => {
  return (
    <div>
      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.subtitle}>{props.children}</p>
    </div>
  );
}
export default PageTitle;