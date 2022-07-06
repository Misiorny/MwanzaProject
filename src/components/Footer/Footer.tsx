import styles from '../../style/styles.module.scss';

function Footer() {
  return (
      <footer className={styles.footer}>
        <p className={styles.footer__paragraph}>Copyright &copy; <span className={styles.footer_bold}>2022</span></p>
        <p className={styles.footer__paragraph}>Created by:<a className={styles.footer_link} href='https://www.misiorny.eu'>misiorny.eu</a></p>
      </footer>
  )
}

export default Footer;
