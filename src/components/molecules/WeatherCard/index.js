import React, { useEffect } from "react";
import Card from "../../atoms/Card";
import moment from "moment";
import "./style.scss";

const Skycons = require("skycons")(window);

const WeatherCard = ({ weather, fetchWeathers }) => {
  const ref = React.createRef();
  useEffect(() => {
    const skycons = new Skycons();
    skycons.add(ref.current, weather.currently.icon);
    skycons.play();
  });

  const location = () => {
    if (weather.timezone === "Asia/Kolkata") {
      return "India";
    } else if (weather.timezone === "Asia/Singapore") {
      return "Singapore";
    } else {
      return "Dubai";
    }
  };

  const detailsColor = () => {
    if (weather.timezone === "Asia/Kolkata") {
      return "green";
    } else if (weather.timezone === "Asia/Singapore") {
      return "blue";
    } else {
      return "red";
    }
  };

  return (
    <Card>
      <div className="weather-card-container">
        <div className="weather-card-header">
          <img
            src="https://i.ibb.co/7R2BQrR/Screenshot-2019-05-06-at-12-06-02.png"
            width="50px"
            height="50px"
            alt="snaphunt logo"
          />
          <img
            src="https://i.ibb.co/gVPpgFL/refresh.png"
            width="50px"
            height="50px"
            alt="refresh"
            onClick={() => fetchWeathers()}
          />
        </div>
        <div className="weather-card-logo">
          <canvas ref={ref} width="128" height="128" />
        </div>
        <div className={`weather-card-details ${detailsColor()}`}>
          <div className="weather-card-temperature">
            <div className="temperature">
              <div className="temperature-digit">{`${Math.round(
                weather.currently.temperature
              )}`}</div>
              <div className="temperature-celsius">°</div>
            </div>
            <div className="location-and-summary">
              <div className="summary">{weather.currently.summary}</div>
              <div className="location">{location()}</div>
            </div>
            <div className="date">
              <div className="date-month">
                {moment.unix(weather.currently.time).format("MMMM")}
              </div>
              <div className="date-day">
                {moment.unix(weather.currently.time).format("D")}
              </div>
            </div>
          </div>
          <div className="weather-card-additional-details">
            <div className="detail">
              <img
                src="https://i.ibb.co/NyrrtCz/wind-speed.png"
                alt="wind-speed"
              />
              <div className="detail-text">
                {Math.round(weather.currently.windSpeed)} KMH
              </div>
            </div>
            <div className="detail">
              <img
                src="https://i.ibb.co/c8ChLnY/water-drop.png"
                alt="water-drop"
              />
              <div className="detail-text">
                {weather.currently.precipProbability * 100}%
              </div>
            </div>
            <div className="detail">
              <img src="https://i.ibb.co/p35dGwY/sun.png" alt="sun" />
              <div className="detail-text">
                {100 - weather.currently.precipProbability * 100}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
