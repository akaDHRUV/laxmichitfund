import styles from "./card.module.css";
import digital from "./images/digital.png";
export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imgdig}>
        <img src={digital} alt="digital" />
      </div>
      <div className={styles.rightbox}>
        <div className={styles.head}>GO DIGITAL NOW</div>
        <div className={styles.para}>
          Our digital platform allows you to access your money from anywhere,
          anytime. Which our innovative security features, and first-in-class
          service, we combine the best of traditional banking with a modern
          convenience of digital banking today
        </div>
        <div className={styles.get}>GET STARTED</div>
      </div>
    </div>
  );
}
