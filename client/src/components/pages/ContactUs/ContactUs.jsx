import React, { Fragment } from "react";
import styles from "./contact.module.scss";
import Header from "../../layouts/Header/Header";

export default function ContactUs () {
  return(
    <Fragment>
        <Header />
        <div className={styles.container}>
            <div className={styles.head}>
                <h1>Readiculous</h1>
            </div>

            <section className={styles.contctcontainer}>
                <h2>Contact Us</h2>
                <div className={styles.contactinfo}>
                    <p>We're thrilled to connect with you!</p>
                </div>
            </section>

            <section className={styles.contactways}>
                <div className={styles.contactmethod}>
                    <h3>Email</h3>
                    <p>Email us at <a href="mailto:info@Readiculous.com">info@Readiculous.com</a></p>

                    <h3>Phone</h3>
                    <p>Call us at 123 456-7890</p>

                    <h3>Connect with Us</h3>
                    <p>Follow us on social media:</p>
                    <a href="#" target="_blank" rel="">Instagram</a>
                </div>

                <div class={styles.contactimage}>
                    <img src="Books.png" alt="book"/>
                </div>
            </section>
        </div>
    </Fragment>
  );
};