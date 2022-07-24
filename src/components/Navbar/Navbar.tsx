import styles from '../../style/styles.module.scss';
// import menuLinks from '../../types/routes';
import {Link, Navigate} from "react-router-dom";

function Navbar() {
  return (
	  <nav className={styles.navbar}>
		<ul className={styles.navbar__list}>
		  <li className={styles.navbar__item}><Link className={styles.navbar__link} to={'/'}
												 >Vision</Link></li>
		  <li className={styles.navbar__item}><Link className={styles.navbar__link}
												 to={'/ppl'}>People</Link></li>
		  <li className={styles.navbar__item}><Link className={styles.navbar__link}
												 to={'/sponsors'}>Sponsors</Link></li>
		  <li className={styles.navbar__item}><Link className={styles.navbar__link}
												 to={'/helpus'}>Help us</Link></li>
		</ul>
	  </nav>
  )
}

export default Navbar;
