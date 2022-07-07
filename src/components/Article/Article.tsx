import styles from '../../style/styles.module.scss';
import Vision from "./Vision";
import People from "./People";
import Sponsors from "./Sponsors";
import Helpus from "./Helpus";


function Article() {
  return (
      <article className={styles.article}>
        <Vision/>
        <People/>
        <Sponsors/>
        <Helpus/>
      </article>
  )
}

export default Article;
