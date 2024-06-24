import styles from "./newsletter.module.css";
export default function Newsletter() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Subscribe to our newsletter for a 10% bonus on transactions
      </div>
      <div className={styles.bottom}>
        <input
          type="e-mail"
          className={styles.mail}
          placeholder="Your email address"
        />
        <button type="submit" className={styles.button}>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
