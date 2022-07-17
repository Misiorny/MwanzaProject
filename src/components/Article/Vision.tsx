import styles from "../../style/styles.module.scss";
import vision from "../../images/layout/vision.png";

function Vision() {
  return (
      <section className={styles.section}>
      <h2 className={styles.section__title}>Vision</h2>
      <img className={styles.section__img}
           src={vision}
           alt='Our place'/>
      <p className={styles.section__text}>We’re hoping to provide a hand up, rather than a hand out.
      </p>
      <p className={styles.section__text}>Through providing a home and a safe environment to develop, we believe the
                                          group of young adults who stand to benefit from this project have a far
                                          greater chance of being self-sufficient in a tough environment. They will be
                                          better able to support each other in adjusting to life beyond the children’s
                                          home in which they grew up, generate their own incomes and contribute to the
                                          local economy. They will also have a special place to call a home of their
                                          own.
      </p>
      <p className={styles.section__text}>We are planning to build a relatively large house where the young adults can
                                          stay when they have first left the children’s home and during times when
                                          they might not otherwise be able to find housing. It is also a place where
                                          those that live elsewhere can come to stay when they are back in their
                                          hometown, Mwanza. Think of it as a family home.
      </p>
      <p className={styles.section__text}>We also see this venture as a way to create opportunities for generating
                                          income and promoting self-sufficiency. With enough land, the young adults
                                          will be able to grow fruits and vegetables and produce eggs to support
                                          themselves and to sell to local villagers. We will be able to build a
                                          workshop to produce goods to sell, and we are hoping to build a number of
                                          bungalows to create sustainable accommodation for tourists. In years to
                                          come, we are looking to create a Tour company to provide tours to lesser
                                          visited National Parks and areas of interest nearby, as well as safaris to
                                          the Ngorongoro Crater and the Serengeti National Park.
      </p>
      <p className={styles.section__text}>We have already purchased one piece of property that is 28m x 35m, and are
                                          looking to buy 2 more larger plots. The approximate cost of purchasing the 2
                                          additional pieces of land is around AUD$20,000 altogether. Each of these
                                          additional larger plots are almost the size of a rugby field.
      </p>
      <p className={styles.section__text}>The long-term intention for this venture is for it to be self sufficient and
                                          self sustaining. To support the development of a true sense of ownership and
                                          responsibility, we hope to coach and support the local beneficiaries in
                                          developing the skills to manage and maintain the venture independently. We are
                                          involving them in all aspects of development and decision making as we bring
                                          this project to life. We are actively looking for local residents who can
                                          support the group through providing knowledge, advice and connection.
      </p>
      </section>
  )
}

export default Vision;
