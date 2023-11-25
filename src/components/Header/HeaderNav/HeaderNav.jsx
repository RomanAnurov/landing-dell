import React from "react";
import "./HeaderNav.scss";
import Button from "../../Button/Button";
import searchIcon from "../../../images/searchIcon.svg"

function HeaderNav(props) {
  const { name } = props;

  return (
    <nav className={`navigation navigation_type_${name}`}>
      <Button text="ГЛАВНАЯ" name="text" />
      <Button text="КАТАЛОГ"  name="text" />
      <Button text="НОВОСТИ"  name="text" />
      <Button text="НАШ АСЦ"  name="text" />
      <Button text="КОНТАКТЫ"  name="text" />
      <Button src={searchIcon} name="icon" />
    </nav>
  );
}

export default HeaderNav;
