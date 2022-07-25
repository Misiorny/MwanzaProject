import styles from "../../style/styles.module.scss";
import Person from "../Person/Person";
import persons from '../../data/persons';

function People() {
  return (
      <div className={styles.section}>
        <h2 className={styles.section__title}>People</h2>
        <p className={styles.section__text}>The young adults we are working to support have grown up together in a children’s home in Mwanza, on Lake
           Victoria, Tanzania. For most of their childhood they had little interaction with the outside community. The
           management of the home has changed hands, going from one organisation to another. Each time the management
           changes, major shifts occur that affect the young adults and their connection to the home. The experiences
           and opportunities for each of them has been dramatically different, with some having many opportunities while
           others having few. Those who have had few opportunities are likely to find it incredibly difficult to get a
           job or be self-sufficient.
        </p>
        <p className={styles.section__text}>Some of the young adults though, have been supported by sponsors to gain qualifications that can dramatically
           increase their ability to be independent. Many of these young adults are willing to step in to support their
           less privileged brothers and sisters in developing skills for independence. There are a number of members of
           the group who are, or have studied, in areas such as international relations, communications, education, and
           pharmaceuticals. Below are some of the young adults who hold the most potential to thrive and support others
           in this project.
        </p>
        {persons.map((e) => <Person key={e.id}
                                    name={e.name}
                                    photo={e.photo}
                                    alt={e.alt}
                                    short={e.short}
                                    text={e.text}/>)}
      </div>
  )
}

export default People;
