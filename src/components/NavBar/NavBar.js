import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.logo}><i className="fa fa-tasks"></i></a>
        <ul className={styles.nav}>
          <li >
            <NavLink to='/' className={( {isActive} ) => isActive ? styles.linkActive : undefined}>Home</NavLink>
            </li>
          <li >
            <NavLink to='/favorite'  className={( {isActive} ) => isActive ? styles.linkActive : undefined}>Favorite</NavLink>
            </li>
          <li >
            <NavLink to='/about'  className={( {isActive} ) => isActive ? styles.linkActive : undefined}>About</NavLink>
            </li>
        </ul>
    </nav>
  );
};
export default Navbar;
