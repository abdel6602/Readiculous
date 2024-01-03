import React, { Fragment } from "react";
import Header from "../../layouts/Header/Header";
import styles from "./settings.module.scss";
import UserData from "../../widgets/UserData/UserData";

export default function Settings () {
  return(
    <Fragment>
        <Header />
        <div className={styles.container}>
          <h1>Account Settings</h1>
          <UserData />
          <div className={styles.buttonsdiv}>
            <button className={styles.button}>Logout</button>
            <button className={styles.button}>Delete Account</button>
          </div>
        </div>
    </Fragment>
  );
};