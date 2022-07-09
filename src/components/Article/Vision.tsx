import styles from "../../style/styles.module.scss";
import vision from "../../images/layout/vision.png";

function Vision() {
  return (
      <section className={styles.section}>
        <h2 className={styles.section__title}>Vision</h2>
        <img className={styles.section__img}
             src={vision}
             alt='Our place'/>
        <p className={styles.section__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                                            laboriosam perferendis provident
                                            quaerat quam? Animi eligendi error quos voluptate voluptatum.
        </p>
        <p className={styles.section__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
                                            aperiam at blanditiis consectetur
                                            consequuntur culpa dolor et illo in inventore iure porro rem sapiente
                                            soluta sunt, veritatis. Animi
                                            cupiditate error harum ipsa ipsum labore libero officia quis similique.
                                            Officiis!
        </p>
        <p className={styles.section__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
                                            aperiam at blanditiis consectetur
                                            consequuntur culpa dolor et illo in inventore iure porro rem sapiente
                                            soluta sunt, veritatis. Animi
                                            cupiditate error harum ipsa ipsum labore libero officia quis similique.
                                            Officiis!
        </p>
      </section>
  )
}

export default Vision;
