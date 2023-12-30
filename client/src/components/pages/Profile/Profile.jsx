import React, { Fragment } from "react";
import Header from "../../layouts/Header/Header";
import styles from "./profile.module.scss";
import FavBooks from "../../widgets/FavBooks/FavBooks";
import MyPastReviews from "../../widgets/MyPastReviews/MyPastReviews";

export default function Profile () {
  return(
    <Fragment>
        <Header />
        <div className={styles.container}>
          <FavBooks />
          <MyPastReviews />
          <button  className={styles.button}>My Books</button>
        </div>
    </Fragment>
  );
};
