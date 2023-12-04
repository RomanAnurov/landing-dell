import React from "react";
import "./BestSellerDell.scss";
import TitleGroup from "../../TitleGroup/TitleGroup";
import Button from "../../Button/Button";
import scrollIcon from "../../../images/scrollIcon.svg";
import strelkaButton from "../../../images/strelkaButtonSvg.svg";
import dellSvg from "../../../images/DellSvg.svg";
import notebookHeader from "../../../images/notebookheader.webp";
import strelkaHeaderLong from "../../../images/strelkaHeaderLong.svg";
import Slider from "../../Slider/Slider";
import sliderData from "../../../data/sliderData";
function BestSellerDell() {
  return (
    <section className="bestsellers">
      <div className="bestsellers__slider-container">
        <div className="bestsellers__slider-content">
          <img
            className="bestsellers__text-back"
            src={dellSvg}
            alt="надпись dell"
          />

          <TitleGroup
            title="Лучшие товары от компании Dell"
            subtitle="Новое поступление"
            name="best"
          >
            <Button text="Подробнее" src={strelkaButton} name="best" />
          </TitleGroup>
          <Button src={scrollIcon} text="Scroll to catalog" name="scroll" />
          <Slider data={sliderData}/>
        </div>
      </div>
      <div className="bestsellers__offer-container">
        <img className="bestsellers__image" src={notebookHeader} alt="ноутбук" />
        <h3 className="bestsellers__image-title">Выгодное предложение от Dell</h3>
        <Button src={strelkaHeaderLong} name="strelka" alt="кнопка стрелка" />
        </div>
    </section>
  );
}

export default BestSellerDell;
