import styles from '../../style/styles.module.scss';

function Navbar() {
  return (
      <nav className={styles.navbar}>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}><a className={styles.navbar__link}
                                                      href='#vision'>Vision</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link}
                                                      href='#ppl'>People</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link}
                                                      href='#sponsors'>Sponsors</a></li>
          <li className={styles.navbar__item}><a className={styles.navbar__link}
                                                      href='#helpus'>Help us</a></li>
        </ul>
      </nav>
  )
}

export default Navbar;
