import styles from '../../style/styles.module.scss';

function Person(props: { name: string, photo: string, alt: string, text: string, short:string }) {
  return (
	  <div className={styles.people__card}>
		<div className={styles.people__content_upside}>
		  <h3 className={styles.people__name}>{props.name}</h3>
          <p className={styles.people__text_short}>{props.short}</p>
		</div>
		<div className={styles.people__foto}>
		  <img className={styles.people__img}
			   src={props.photo}
			   alt={props.alt}/>
		</div>
		<div className={styles.people__content_downside}>
		  <p className={styles.people__text}>{props.text}</p>
		</div>
	  </div>
  )
}

export default Person;
