import React, { useState } from "react";
import "./Slider.scss";
import arrowRight from "../../images/arrowRightSvg.svg";
import arrowLeft from "../../images/arrowLeftSvg.svg";

function Slider({ data }) {
  const [slide, setSlide] = useState(0);

  
  return (
    <div className="slider">
      <button className="slider__button slider__button-left" type="button">
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      {data.map((item, index) => {
        return (
          <img
            src={item.src}
            alt={item.src}
            key={index}
            className={
              slide === index
                ? "slider__item"
                : "slider__item slider__item_hidden"
            }
          />
        );
      })}
      <button
        src={arrowRight}
        className="slider__button slider__button-right"
        type="button"
      >
        <img src={arrowRight} alt="arrow-Right" />
      </button>
      <span className="slider__indicators">
        {data.map((_, index) => {
          return (
            <button
              className={
                slide === index
                  ? "slider__indicator"
                  : "slider__indicator slider__indicator_inactive"
              }
              key={index}
              onClick={null}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Slider;
