import Navbar from '../Navbar/Navbar';
import styles from '../../style/styles.module.scss';

function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.shadow}></div>
        <h1 className={styles.header__title } >The Mwanza Project</h1>
        <p className={styles.header__text}>We can help together!</p>
        <Navbar/>
      </header>
  )
}

export default Header;
