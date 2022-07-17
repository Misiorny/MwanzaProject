import styles from "../../style/styles.module.scss";
import donators from '../../data/donators';
import Person from "../Person/Person";

function Sponsors() {
  return (
      <div className={styles.section}>
        <h2 className={styles.section__title}>Sponsors</h2>
        {donators.map((e) => <Person name={e.name}
                                     photo={e.photo}
                                     alt={e.alt}
                                     text={e.text}/>)}
      </div>
  )
}

export default Sponsors;
