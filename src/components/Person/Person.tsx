import styles from '../../style/styles.module.scss';

function Person(props: { name: string, photo: string , alt: string, text: string }) {
  return (
      <section className={styles.people__content}>
        <h3 className={styles.people__name}>{props.name}</h3>
        <img className={styles.people__img}
             src={props.photo}
             alt={props.alt}/>
        <p className={styles.people__text}>{props.text}</p>

      </section>
  )
}

export default Person;
