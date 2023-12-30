import React, { Fragment } from "react";
import styles from "./club.module.scss";

export default function Club () {
  return(
    <Fragment>
        <div className={styles.container}>
            <div className={styles.head}>
                <h1>Club Name</h1>
            </div>
    

            <div className={styles.groupcontainer}>
                <div className={styles.groupinfo}>
                    <p>Group description</p>
                </div>

                <div>
                    <h2>Genre</h2>
                    <div class={styles.genre}>
                        <p>Group's primary and secondary genre</p>
                    </div>

                    <h2>Book of The Month</h2>
                    <div class={styles.bookofthemonth}>
                        <img src="Iron Flame.jpg" alt="Iron Flame" />
                        <p>Book Name</p>
                    </div>

                    <h2>Group Members</h2>
                    <div class={styles.memberssection}>
                        <ul>
                            <li>Member 1</li>
                            <li>Member 2</li>
                            <li>Member 3</li>
                        </ul>
                     </div>
                </div>
            </div>
        </div>
    </Fragment>
    );
};