import { useState, useEffect } from 'react';

import DailyWeather from './DailyWeather';
import styles from './Weather.module.css';
import countries from '../Data/countriesCity';
import setLabelTextLang from '../UI/translateLang';
import { wordsLoadingData, wordsNotData } from '../Data/wordsTranslate';

function Weather({ language, country, city }) {
  const [weatherData, setWeatherData] = useState();
  const [lat, setLat] = useState(51.77);
  const [lon, setLon] = useState(19.34);

  function setLanHandler() {
    setTimeout(setLat(countries[country].cities[city].lat), 1000);
  }

  function setLonHandler() {
    setTimeout(setLon(countries[country].cities[city].lon), 1000);
  }

  let objectForCheck = countries[country].cities;
  objectForCheck.hasOwnProperty(city)
    ? (function () {
        lat !== countries[country].cities[city].lat
          ? setLanHandler()
          : (function () {})();
        lon !== countries[country].cities[city].lon
          ? setLonHandler()
          : (function () {})();
      })()
    : (function () {})();

  useEffect(() => {
    const APIkey = '1fe59adfb9fa0602487719ba0dd5c512';
    const API = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly&appid=${APIkey}`;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [lat, lon]);
  return (
    <>
      <div className={styles.content}>
        {weatherData ? (
          weatherData.daily ? (
            weatherData.daily.map((day, i) => {
              return (
                <DailyWeather
                  key={i}
                  language={language}
                  dateNum={day.dt}
                  dayIcon={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  tempHigh={day.temp.max}
                  tempLow={day.temp.min}
                  humidity={day.humidity}
                  windSpeed={day.wind_speed}
                  clouds={day.clouds}
                  rainMM={day?.rain}
                />
              );
            })
          ) : (
            <h2 style={{ color: '#fff' }}>
              {setLabelTextLang(language, wordsNotData)} ^-^
            </h2>
          )
        ) : (
          <h2 style={{ color: '#fff' }}>
            {setLabelTextLang(language, wordsLoadingData)}...
          </h2>
        )}
      </div>
    </>
  );
}

export default Weather;
