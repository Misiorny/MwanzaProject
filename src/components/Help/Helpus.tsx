import styles from "../../style/styles.module.scss";
import mwanza from "../../images/layout/mwanza.png";
import Payments from "./Payments";

function Helpus() {
  return (
      <section className={styles.section}>
        <h2 className={styles.section__title}>Help us</h2>
        <img className={styles.section__img}
             src={mwanza}
             alt='Lake Victoria view in Mwanza'/>
        <p className={styles.section__text}>Mwanza is located on the banks of Lake Victoria, the largest lake in Africa.
                                            It is Tanzania’s second largest city with a busy port and is a major
                                            industrial center.
        </p>
        <p className={styles.section__text}>Mwanza has a university hospital and often hosts young doctors in training
                                            from a number of European countries, particularly Germany. It is also
                                            popular with Gap students for Volunteerism, although it is questionable as
                                            to whether many of these Volunteer Tour groups are helpful or effective in
                                            providing any kind of lasting benefit for locals or the community.
        </p>
        <p className={styles.section__text}>There are a number of interesting areas to visit nearby including the
                                            Serengeti National Park, Ngorongoro Crater, and Rubondo National Park.
        </p>
        <p className={styles.section__text}>Wildlife such as baboons, servals, tree hyraxes, black-faced vervet monkeys,
                                            chameleons and mongoose can be found around Mwanza. Crocodiles can
                                            occasionally be spotted in the lake, and the area has a number of snakes
                                            including the black mamba, the green mamba, puff adders and cobras. Many
                                            interesting birds can also be found, including the very common and very ugly
                                            Marabou Stork.
        </p>
        <p className={styles.section__text}>Despite the crocodiles and bilharzia (a small parasite found in the lake),
                                            there is one location in Mwanza where locals, expats and tourists do go to
                                            swim.
        </p>
        <Payments/>
      </section>
  )
}

export default Helpus;
