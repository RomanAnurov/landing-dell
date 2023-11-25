import React from "react";
import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "../Logo/Logo";
import HeaderUserKabinet from "./HeaderUserKabinet/HeaderUserKabinet";

function Header() {
  return (
    <header className="header">
      <Logo name="big" />
      <HeaderNav name="menu" />
      <HeaderUserKabinet />
    </header>
  );
}

export default Header;
