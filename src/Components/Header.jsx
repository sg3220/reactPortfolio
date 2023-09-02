import "./../Styles/Header.scss";
import "./../Styles/Theme.scss";
import React, { useState } from "react";
import HeaderName from "./HeaderName";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="Header">
      <HeaderName data={"Siddharth Ghosh"} />
      <HeaderButton
        data={"Home"}
        className={"header-Button header-Button-Red"}
        link={"/"}
      />
      <HeaderButton
        data={"Education"}
        className={"header-Button header-Button-Yellow"}
        link={"/Education"}
      />
      <HeaderButton
        data={"Projects"}
        className={"header-Button header-Button-Green"}
        link={"/Projects"}
      />
      <HeaderButton
        data={"Contact Me"}
        className={"header-Button header-Button-Blue"}
        link={"/ContactMe"}
      />
    </div>
  );
};

export default Header;
