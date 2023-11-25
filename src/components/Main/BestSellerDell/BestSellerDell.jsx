import React from "react";
import "./BestSellerDell.scss";
import TitleGroup from "../../TitleGroup/TitleGroup";
import Button from "../../Button/Button";
import scrollIcon from "../../../images/scrollIcon.svg";
import strelkaButton from "../../../images/strelkaButtonSvg.svg";
function BestSellerDell() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__slider-container">
        <div className="bestsellers__slider-content">
          <div className="bestsellers__text-back"></div>
          <>
            <TitleGroup
              title="Лучшие товары от компании Dell"
              subtitle="Новое поступление"
              name="best"
            >
              <Button text="Подробнее" src={strelkaButton} name="best" />
            </TitleGroup>
            <Button src={scrollIcon} text="Scroll to catalog" name="scroll" />
          </>
        </div>
      </div>
      <div className="bestsellers__offer-container"></div>
    </section>
  );
}

export default BestSellerDell;
