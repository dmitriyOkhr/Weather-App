import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../types";
import { RootObject } from "../types";
import { Weather } from "../types";
import axios from "axios";
import moment from "moment";

const API_KEY = "51abb9d6d5aefe531f7f91e1f94dc59e";

const WeatherCard = () => {
  const API_CITY = useSelector((state: State) => state.todos.city);
  const [data, setData] = useState<RootObject | null>(null);
  const [time, setTime] = useState<string | null>(null);

  function checkerWeatherInfo(weather: string[]) {
    switch (weather[0]) {
      case "Clouds": {
        return "clouds";
      }
      case "Rain": {
        return "rain";
      }
      case "Drizzle": {
        return "drizzle";
      }
      case "Snow": {
        return "snow";
      }
      case "Clear": {
        return "clear";
      }
      default:
        return "weatherCard";
    }
  }

  useEffect(() => {
    const interval = setInterval(
      () => setTime(moment().format("MMMM Do YYYY, h:mm a")),
      5 * 1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setData(null);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${API_CITY}&appid=${API_KEY}&units=metric`
      )
      //.then((res) => console.log(res.data));
      .then((res) => setData(res.data));
  }, [API_CITY]);

  return (
    <div>
      {data && (
        <div
          className={checkerWeatherInfo(
            data.weather.map((param: Weather) => param.main)
          )}
        >
          <div className="main_info">
            <div className="transbox">
              <div className="transbox_city_text">
                {API_CITY}, {data.sys.country}
              </div>
              <div className="transbox_time_text">{time}</div>
            </div>
          </div>
          <div className="temperature">
            <div>{Math.round(data.main.temp)}°C</div>
          </div>
          <div className="description_info">
            <div className="transbox_desc">
              <div>Feels like: {Math.round(data.main.feels_like)}°C</div>
              <div>Wind speed: 彡{Math.round(data.wind.speed)} m/s </div>
              <div>
                {data.weather.map((param: Weather) =>
                  param.description.toUpperCase()
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {!data && <p></p>}
    </div>
  );
};

export default WeatherCard;
