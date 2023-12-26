import React, { Fragment } from "react";
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";
import "./Home.css";

export default function Home () {
  return(
    <Fragment>
        <Header />
        <body>
        <div className="container">
            <div className="large-image">
              <div className="large-image2">
                <img className="image" src="https://s3-alpha-sig.figma.com/img/eb78/536b/bc5ad475a7cad60350a13dd950c91bbb?Expires=1704672000&Signature=liUMyzNsAOfBSj9Az6WGE7yPbANFueBUWRVaPRBIqaiw2S0m~LHI2pGaGh0RWFj3RcUFku5raEjRlFwQ6eXEpZR4lSKPehK7JKWDd0Jv3kuhlpKX5mZrTTyxAWueZYLxJQbkKMnV5Mr6u2UXDK8AdYEOvHT~3zGtMynnetH7Kt6emnnzDuXXPSHPOGQtKS7Nl2Kjd3rHFmA4MChoCdejunxFWyfGZvN9WwOzLl15b6CzbyY6x-QfMG9S5bnn0igogbWHIE4x4mLgPz2E2kEh6Ly2x~Z39FKEs9eHBT1Q2mOnMf3HJFQ4AcHfHbhmWXPJVWIB7JCPlTeIrLFkzSlT0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="placeholder" />
              </div>
            </div>
            <div className="mission">
              <h1>Our Mission</h1>
              <div className="mission-text">
                <p>We are a group of students from BYU-Idaho who are working to create a website that will help people learn more about the Book of Mormon. We hope that this website will help people learn more about the Book of Mormon and help them to come closer to Christ.</p>
              </div>
              <div className="mission image">
              </div>
            </div>
            <div className="recent">
            </div>
            <div className="bofm">
            </div>
            <div className="founders">
            </div>
        </div>
        </body>
        {/* <Footer /> */}
    </Fragment>
  );
};