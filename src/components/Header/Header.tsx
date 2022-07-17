import Navbar from '../Navbar/Navbar';
import styles from '../../style/styles.module.scss';


function Header() {
  return (
      <header className={styles.header}>
        <h1 className={styles.header__title}>The Mwanza Project</h1>
        <p className={styles.header__paragraph}>We can help together!</p>

      </header>
  )
}

export default Header;
