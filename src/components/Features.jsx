import styles from "./features.module.css"
import secure from "./images/secure.png"
import money from "./images/money.png"
import chart from "./images/chart.png"
import credit from "./images/credit.png"
export default function Features(){
    return <div>
        <div className={styles.desc}>ALL FEATURES YOU NEED IN ONE PLACE</div>
        <div className={styles.box}>
            <div className={styles.topbox}>
            <div className={styles.first}>
                <div className={styles.img}><img src={secure} alt="secure" /></div>
                <div className={styles.firstText}>Secure Online Banking</div>
            </div>
            <div className={styles.second}>
                <div className={styles.imgm}><img src={money} alt="secure" /></div>
                <div className={styles.secondText}>Automatic Bill Payment</div>
            </div>
            </div>
            <div className={styles.bottombox}>
            <div className={styles.firstb}>
                <div className={styles.imgbf}><img src={chart} alt="secure" /></div>
                <div className={styles.firstbText}>No Hidden Fees</div>
            </div> 
            <div className={styles.secondb}>
                <div className={styles.imgbs}><img src={credit} alt="secure" /></div>
                <div className={styles.secondbText}>Card Payments Anytime</div>
            </div>
            </div>
        </div>
    </div>
}