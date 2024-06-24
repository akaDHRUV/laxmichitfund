import styles from "./testimonials.module.css";
import male from "./images/male.png";
import female from "./images/female.png";
export default function Testimonials() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>TRUSTED BY PEOPLE ALL OVER THE WORLD</div>
      <div className={styles.box}>
        <div className={styles.first}>
          <div className={styles.head}>SUPER USER FRIENDLY</div>
          <div className={styles.para}>
            The UI is so intuitive that anyone can use it, without any knowledge
            on the system & I love the financial reports. The tool automatically
            organizes all data and gives us clarity on spend.
          </div>
          <div className={styles.bottom}>
            <div className={styles.user}>
              <img src={male} alt="male" />
            </div>
            <div className={styles.about}>
              <div className={styles.name}>William Tromp</div>
              <div className={styles.desc}>CTO - Gislason and Sons</div>
            </div>
          </div>
        </div>
        <div className={styles.first} >
          <div className={styles.head}>SAVE HOURS EVERY WEEK!</div>
          <div className={styles.para}>
            I have been saved so much time on tax calculations. And it gives me
            reliable projections.I love the financial reports. The tool
            automatically organizes all data and gives us clarity .
          </div>
          <div className={styles.bottom}>
            <div className={styles.user}>
              <img src={female} alt="fe" />
            </div>
            <div className={styles.about}>
              <div className={styles.name}>Rebecca Emard</div>
              <div className={styles.desc} >Founder - Conn Inc</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
