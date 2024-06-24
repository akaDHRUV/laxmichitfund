import styles from "./faq.module.css"
export default function Faq() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>FREQUENTLY ASKED QUESTIONS</div>
      <div>
        <div className={styles.box}>
          <div className={styles.head}>How much would it require to open an account ?</div>
          <div className={styles.icon}>
            <span class="material-icons">add_circle</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.head}>Is there a minimum operational cost ?</div>
          <div className={styles.icon}>
            <span class="material-icons">add_circle</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.head}>Where can i use my debit cards ?</div>
          <div className={styles.icon}>
            <span class="material-icons">add_circle</span>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.head}>How much do i get as interest on savings ?</div>
          <div className={styles.icon}>
            <span class="material-icons">add_circle</span>
          </div>
        </div>
      </div>
    </div>
  );
}
