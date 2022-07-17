import styles from '../../style/styles.module.scss';
import Vision from "../Vision/Vision";
import People from "../People/People";
import Sponsors from "../Sponsors/Sponsors";
import Helpus from "../Help/Helpus";


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
