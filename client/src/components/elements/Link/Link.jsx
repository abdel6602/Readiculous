import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./link.css";

export default ({ children, url, hoverStyle, style, click, after, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={url}
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
      style={hover ? hoverStyle : style}
      onClick={click}
      className={className? className : styles.link}
      data-after={after}
    >
      {children}
    </Link>
  );
};