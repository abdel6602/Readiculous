import React, { Fragment } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import styles from "./home.css";

export default function Home () {
  return(
    <Fragment>
        <Header />
          <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.largeimage}>
                    {/* <img className="image" src="https://s3-alpha-sig.figma.com/img/eb78/536b/bc5ad475a7cad60350a13dd950c91bbb?Expires=1704672000&Signature=liUMyzNsAOfBSj9Az6WGE7yPbANFueBUWRVaPRBIqaiw2S0m~LHI2pGaGh0RWFj3RcUFku5raEjRlFwQ6eXEpZR4lSKPehK7JKWDd0Jv3kuhlpKX5mZrTTyxAWueZYLxJQbkKMnV5Mr6u2UXDK8AdYEOvHT~3zGtMynnetH7Kt6emnnzDuXXPSHPOGQtKS7Nl2Kjd3rHFmA4MChoCdejunxFWyfGZvN9WwOzLl15b6CzbyY6x-QfMG9S5bnn0igogbWHIE4x4mLgPz2E2kEh6Ly2x~Z39FKEs9eHBT1Q2mOnMf3HJFQ4AcHfHbhmWXPJVWIB7JCPlTeIrLFkzSlT0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="placeholder" /> */}
                </div>
              </div>
              <div className={styles.bottom}>
                <h1 className={styles.h1}>Our Mission</h1>
                <div className={styles.mission}>
                  <div className={styles.missiontext}>
                    <p>eashjdqwldansbfhajlknskbvhsdjdlknsbsvkhdajknsvbkdhajkxnabsdvkdhcakxnacdbskhcaknsvdbdkclnax nsvbdkjncxm, svdbnckzm, csvbdkcnalsvbdkclncbvkshlcajkncds</p>
                  </div>
                  <div className={styles.missionimage}>
                    <img className={styles.missionimagesmall} src="https://s3-alpha-sig.figma.com/img/87a9/52f3/2bd19aeb1ac80001b209a2600ee27f53?Expires=1704672000&Signature=QPCTuiCaAUT5Snt22GvNDcdpgh~D0dfGlj0sNxAk8xGnIRmKRqhBCb6w~L2sVIF4ZRKBQ19ZJwmOjKZG54khZI0IgPPBm5-h3Rl1f5fuMotr5fNIr2WeJeoDdxE3AUSYyktthRDHJI6MlSmwB91mTuGW-cIYOU8i-I2fdbO3Av2VOsHdh8Nz~S8bHbdCpUnSNjUzCZmjjwNRRqqYuOtGLNHIrCNPglFpJJeTkpGXa-ztnOkA-guqtS2eX09bWlJFMqO8Re5ihN5xi1mXB7IuG539fpLYERzcmF5uq-f6SDTmKd2wztk7Rml1HMqpNCvrNItX4BcDtticOTkRcK9IjQ__&K" alt="placeholder" />
                  </div>
                </div>
                <h1 className={styles.h1}>Recent Publishings</h1>
              </div>
          </div>
    </Fragment>
  );
};