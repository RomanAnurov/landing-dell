import React from "react";
import "./TitleGroup.scss";
import Button from "../Button/Button";

function TitleGroup(props) {

    const { name, title, subtitle, children } = props;

    return (
        <div className={`container container_type_${name}`}>
            <h2 className={`container__title container__title_type_${name}`}>{title}</h2>
            <p className={`container__subtitle container__subtitle_type_${name}`}>{subtitle}</p>
            {children}

        </div>

    )
}

export default TitleGroup;