import styles from "../../style/styles.module.scss";

function PaymentLink (){
  return(
      <div className={styles.section__link}>
        <p className={styles.section__text}>PayPal</p>
        <img className={styles.section__icon} src={''} alt={''}/>

      </div>
  )
}

export default PaymentLink;
