import small from "./images/small.png";
import startup from "./images/startup.png";
import enter from "./images/enter.png";
import styles from "./business.module.css"
export default function Business() {
  return (
    <div className={styles.container} >
      <div className={styles.title}>DESIGNED FOR BUSINESSES OF ALL SIZES</div>
      <div className={styles.wrap}>
        <div className={styles.first}>
          <img src={small} alt="cartoon" />
          <div className={styles.desc}>FOR SMALL BUSINESSES</div>
        </div>
        <div className={styles.second}>
          <img src={startup} alt="cartoon" />
          <div className={styles.des}>FOR STARTUPS</div>
        </div>
        <div className={styles.second}>
          <img src={enter} alt="cartoon" />
          <div>FOR ENTERPRISES</div>
        </div>
      </div>
    </div>
  );
}
