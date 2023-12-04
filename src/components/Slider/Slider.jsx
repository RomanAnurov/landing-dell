import React, { useState } from "react";
import "./Slider.scss";
import arrowRight from "../../images/arrowRightSvg.svg";
import arrowLeft from "../../images/arrowLeftSvg.svg";

function Slider(props) {

  const {data} = props;
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  
  return (
    <div className="slider">
      <button className="slider__button slider__button-left" type="button" onClick={prevSlide}>
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
      onClick={nextSlide}>
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
              onClick={() =>{setSlide(index)}}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Slider;
