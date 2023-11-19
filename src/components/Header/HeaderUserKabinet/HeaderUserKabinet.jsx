import React from "react";
import "./HeaderUserKabinet.scss";
import Button from "../../Button/Button";

import userIcon from "../../../images/userIcon.svg";
import signalIcon from "../../../images/signalIcon.svg";
import favoritesIcon from "../../../images/favoritesIcon.svg";
import basketIcon from "../../../images/basketIcon.svg";



function HeaderUserKabinet() {

  return (
    <nav className="kabinet">
      <Button src={userIcon}/>
      <Button src={signalIcon}/>
      <Button src={favoritesIcon}/>
      <Button src={basketIcon}/>
    </nav>
  );
}

export default HeaderUserKabinet;
