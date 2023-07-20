import React from "react";
import "./../Styles/Button.scss";
import { Link } from "react-router-dom";

const HeaderButton = (props) => {
  return (
    <div className={props.className}>
      <Link to={props.link}>{props.data}</Link>
    </div>
  );
};

export default HeaderButton;
