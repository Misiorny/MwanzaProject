import styles from '../../style/styles.module.scss';
import menuLinks, {ROUTES} from '../../types/routes';
import {Link} from "react-router-dom";

function Navbar() {
  return (
	  <nav className={styles.navbar}>
		<ul className={styles.navbar__list}>
		  {menuLinks.map((e) => <li className={styles.navbar__item}
									key={e.id}><Link className={styles.navbar__link}
													 to={e.to}>{e.label}</Link></li>)}
		</ul>
	  </nav>
  )
}

export default Navbar;
