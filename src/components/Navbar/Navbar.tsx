import styles from '../../style/styles.module.scss';

function Navbar() {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__list_item}>Vision</li>
          <li className={styles.navbar__list_item}>People</li>
          <li className={styles.navbar__list_item}>Sponsors</li>
          <li className={styles.navbar__list_item}>Help us</li>
        </ul>
      </nav>
  )
}

export default Navbar;
