import styles from "./hero.module.css";
import heroimg from "./images/hero.png"
import trusted from "./images/image 2.png"
export default function Hero() {
  return (
    <div>
    <div className={styles.hero}>
      <div className={styles.rect}>
        <div className={styles.top}>
          <div className={styles.logow}>
            <div className={styles.logo}>
              <div className={styles.text}>BANQUEE</div>
            </div>
          </div>
          <div className={styles.dropDown}>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
            <div className={styles.burger}></div>
          </div>
        </div>
        <div className={styles.bigbox}>
        <div className={styles.leftbox}>
          <div className={styles.head}>EASY WAY TO BANKING</div>
          <div className={styles.para}>
            We give you both the foundation and flexibility to build and grow
            digital capabilities and deliver customer experiences.
          </div>
          <div className={styles.get}>GET STARTED</div>
        </div>
        <div className={styles.rightbox}>
          <img src={heroimg} alt="cartoon"  />
        </div>
        </div>
      </div>
    </div>
    <div className={styles.trustedBy}>
      <img src={trusted} alt="img" />
    </div>
    </div>
  );
}
