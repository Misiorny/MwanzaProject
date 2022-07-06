import styles from '../../style/styles.module.scss';
import vision from '../../../src/images/layout/vision.png';

function Article() {
  return (
      <article className={styles.article}>
        <section className={styles.section}>
          <img className={styles.section__img}
               src={vision}
               alt='Our place'/>
          <div className={styles.section_first}>
            <h3 className={styles.section__title}>Vision</h3>
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
          </div>
        </section>
      </article>
  )
}

export default Article;
