import React, { Fragment } from "react";
import styles from "./AboutUs.module.scss";
import Header from "../../layouts/Header/Header";


export default function AboutUs() {

  return(
    <Fragment>
        <Header />
        <div className={styles.container}>
            <div className={styles.head}>
                <h1>About Us</h1>
            </div>

            <h2>Our Story</h2>
            <div className={styles.section}>
                <p>
                    Welcome to our Book Club! We are a community of avid readers who share a passion for literature and the joy of reading.
                </p>
                <p>
                    Our book club was founded with the mission of promoting a love for books, fostering intellectual discussions, and creating a welcoming space for book enthusiasts to connect.
                </p>
            </div>

            <h2>Our Team</h2>
            <div className={styles.section}>
                <div className={styles.teamsection}>
                    <div className={styles.teammember}>
                        <img src="SpongeBob.png" alt="Team member 1" />
                        <h3>SpongeBob</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Gary.png" alt="Team member 2" />
                        <h3>Gary</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Patrick.jpg" alt="Team member 3" />
                        <h3>Patrick</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Mr. Crabs.png" alt="Team member 4" />
                        <h3>Mr. Crabs</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Pearl Krabs.jpg" alt="Team member 5" />
                        <h3>Pearl Krabs</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Plankton.jpg" alt="Team member 6" />
                        <h3>Plankton</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Squidward.png" alt="Team member 7" />
                        <h3>Squidward</h3>
                    </div>

                    <div className={styles.teammember}>
                        <img src="Sandy.png" alt="Team member 8" />
                        <h3>Sandy</h3>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  );
};