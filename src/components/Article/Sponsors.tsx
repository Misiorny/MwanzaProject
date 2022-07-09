import styles from "../../style/styles.module.scss";
import moi from "../../images/donators/moi.png";

function Sponsors() {
  return (
      <section className={styles.section}>
        <h2 className={styles.section__title}>Sponsors</h2>
        <section className={styles.sponsors__content}>
          <h3 className={styles.sponsors__content_name}>Moira</h3>
          <img className={styles.sponsors__content_img}
               src={moi}
               alt='Our place'/>
          <p className={styles.sponsors__content_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                              laboriosam perferendis provident
                                              quaerat quam? Animi eligendi error quos voluptate voluptatum.
          </p>
        </section>
      </section>
  )
}

export default Sponsors;
