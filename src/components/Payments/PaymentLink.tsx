import styles from "../../style/styles.module.scss";

function PaymentLink (){
  return(
      <section className={styles.section}>

        <img className={styles.section__icon} src={''} alt={''}/>
        <p className={styles.section__text}>PayPal</p>

      </section>
  )
}

export default PaymentLink;
