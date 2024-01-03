import React, { Fragment } from "react";
import Header from "../../layouts/Header/Header";
import styles from "./mybook.module.scss";
import WishList from "../../widgets/WishList/WishList";
import ReadBooks from "../../widgets/ReadBooks/ReadBooks";

export default function MyBook() {
  return(
    <Fragment>
        <Header />
        <div className={styles.container}>
          <WishList />
          <ReadBooks />
        </div>
    </Fragment>
  );
};