import styles from "./mini.module.css";
import mobile from "./images/mobile.png";
export default function Mini() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>WE TAKE BANKING PERSONALLY</div>
      <div className={styles.box}>
        <div className={styles.desc}>
          <div>
            <div className={styles.h2}>SAVE</div>
            <div className={styles.para}>
              We're using technology to solve that by automating saving. You set
              an amount to save and we takes care of the rest, prompt interest
              payout included.
            </div>
          </div>
          <div>
            <div className={styles.h1h3}>SPEND</div>
            <div className={styles.para}>
              We give you more than one way to pay easily, including a widely
              accepted debit card issued in partnership with Visa, quick web
              payments direct from your account.
            </div>
          </div>
          <div>
            <div className={styles.h2}>SEND</div>
            <div className={styles.para}>
              From international transfers to on-the-spot payments at market
              stalls, we've simplified sending money so you don't need to think
              too much about it.
            </div>
          </div>
        </div>
        <div className={styles.mobimg}>
          <img src={mobile} alt="mob" />
        </div>
      </div>
    </div>
  );
}
