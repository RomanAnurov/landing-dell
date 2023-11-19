import React from "react";
import "./Logo.scss";

import { Link } from "react-router-dom";
import headerLogo from "../../images/logo.webp";

function Logo(props) {
  const { name } = props;
  return (
    <Link to="/">
      <img
        src={headerLogo}
        alt="логотип"
        className={`logo logo_type_${name}`}
      />
    </Link>
  );
}

export default Logo;
