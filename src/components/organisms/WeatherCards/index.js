import React from "react";
import WeatherCard from "../../molecules/WeatherCard";
import Carousel from "nuka-carousel";
import "./style.scss";

const WeatherCards = ({ weathers, fetchWeathers }) => {
  return (
    <div className="carousel-container">
      <Carousel
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        slidesToShow={1}
        slideIndex={0}
      >
        <WeatherCard weather={weathers[0]} fetchWeathers={fetchWeathers} />
        <WeatherCard weather={weathers[1]} fetchWeathers={fetchWeathers} />
        <WeatherCard weather={weathers[2]} fetchWeathers={fetchWeathers} />
      </Carousel>
    </div>
  );
};

export default WeatherCards;
