import styles from "../../style/styles.module.scss";
import PaymentLink from "./PaymentLink";

function Payments() {
  return (
      <section className={styles.section}>
        <h3>Possible donations</h3>
        <p className={styles.section__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem
                                            dolorum harum in nemo nihil nulla odio quis reiciendis ullam.
        </p>
        <PaymentLink/>

      </section>
  )
}
export default Payments;
