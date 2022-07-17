import styles from "../../style/styles.module.scss";
import Person from "../Person/Person";
import persons from '../../data/persons';

function People() {
  return (
      <div className={styles.section}>
        <h2 className={styles.section__title}>People</h2>
        {persons.map((e) => <Person key={e.id}
                                    name={e.name}
                                    photo={e.photo}
                                    alt={e.alt}
                                    text={e.text}/>)}
      </div>
  )
}

export default People;
