import styles from "../../style/styles.module.scss";
import paul from "../../images/beneficients/paul.png";
import angel from "../../images/beneficients/angel.png";


function People() {
  return (
      <div className={styles.section}>
        <h2 className={styles.section__title}>People</h2>
        <section className={styles.people__content}>
          <h3 className={styles.people__content_name}>Benjamin</h3>
          <img className={styles.people__content_img}
               src={angel}
               alt='Our place'/>
        </section>
          <p className={styles.people__content_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                             laboriosam perferendis provident
                                             quaerat quam? Animi eligendi error quos voluptate voluptatum.
          </p>
        <section className={styles.people__content}>
          <img className={styles.people__content_img}
               src={paul}
               alt='Our place'/>
          <h3 className={styles.people__content_name}>Vicky</h3>
        </section>
          <p className={styles.people__content_text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                             laboriosam perferendis provident
                                             quaerat quam? Animi eligendi error quos voluptate voluptatum.
          </p>
      </div>
  )
}

export default People;
