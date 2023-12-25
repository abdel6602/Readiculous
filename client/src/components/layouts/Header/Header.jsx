import React, { useState, useEffect, Fragment } from "react";
import { Link } from "./path-to-your-link-component"; // Correct import statement
import { useCustomState } from "../../../state/state";
import headerData from "./headerData";

export default () => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  const handleResize = () => {
    setSticky(window.pageYOffset > 200 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  const menu = headerData.map((item, index) => {
    return (
      <li key={index}>
        <Link url={item.url} hoverStyle={{ color: "#26735b" }}>
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <Fragment>
      <div className={`your-header-wrapper-class ${sticky ? "sticky" : ""}`}>
        <ul>{menu}</ul>
      </div>
    </Fragment>
  );
};
 


{/* <header>
          <div>
            <img></img>
          </div>
          <div>
            <img></img>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
          <div>
            <img></img>
            <p></p>
          </div>
        </header> */}