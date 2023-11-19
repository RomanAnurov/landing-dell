import React from "react";
import "./Button.scss";

function Button(props) {
  const { src, text, alt, link, name, onClick } = props;

  return (
    <button
      className={`button button_type_${name}`}
      onClick={onClick}
      type="button"
    >
      <img src={src} className="button__icon" alt={alt} />
      <a className="button__text" href={link}>
        {text}
      </a>
    </button>
  );
}

export default Button;
