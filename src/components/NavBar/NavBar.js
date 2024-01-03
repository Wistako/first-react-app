import styles from './NavBar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.logo}><i className="fa fa-tasks"></i></a>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <a href="/" className={styles.navLink}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/favorite" className={styles.navLink}>Favorite</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about" className={styles.navLink}>About</a>
          </li>
        </ul>
    </nav>
  );
};
export default Navbar;
