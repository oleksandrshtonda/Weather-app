import styles from './DailyWeather.module.css';
import { RiTempColdFill, RiTempHotFill, RiCloudLine } from 'react-icons/ri';
import { TbTemperatureCelsius } from 'react-icons/tb';
import { WiHumidity, WiUmbrella } from 'react-icons/wi';
import { GiWindsock } from 'react-icons/gi';
import setLabelTextLang from '../UI/translateLang';
import {
  wordsMaxTemp,
  wordsMinTemp,
  wordsHumidity,
  wordsWindSpeed,
  wordsCloudindess,
  unitsMetersSeconds,
  unitsMM,
  wordsPrecipitation,
} from '../Data/wordsTranslate';

function DailyWeather({
  language,
  dateNum,
  dayIcon,
  tempHigh,
  tempLow,
  humidity,
  windSpeed,
  clouds,
  rainMM = 0,
}) {
  dateNum = new Date(dateNum * 1000);
  dateNum.getDay();
  let options = { dateStyle: 'full' };
  dateNum = Intl.DateTimeFormat(language, options).format(dateNum);

  return (
    <div className={styles.weatherCard}>
      <h2>{dateNum}</h2>
      <img src={dayIcon} alt="icon of weather" />
      <p className={styles.pRainMM}>
        <WiUmbrella className={styles.icons} />{' '}
        {setLabelTextLang(language, wordsPrecipitation)}: {rainMM}{' '}
        {setLabelTextLang(language, unitsMM)}
      </p>
      <p className={styles.pMaksTemp}>
        <RiTempHotFill /> {setLabelTextLang(language, wordsMaxTemp)}
        {tempHigh.toFixed(1)}
        <TbTemperatureCelsius />
      </p>
      <p className={styles.pMinTemp}>
        <RiTempColdFill /> {setLabelTextLang(language, wordsMinTemp)}
        {tempLow.toFixed(1)}
        <TbTemperatureCelsius />
      </p>
      <p className={styles.pWindSpeed}>
        <GiWindsock className={styles.icons} />{' '}
        {setLabelTextLang(language, wordsWindSpeed)}: {windSpeed}{' '}
        {setLabelTextLang(language, unitsMetersSeconds)}
      </p>
      <p className={styles.pHumidity}>
        <WiHumidity className={styles.icons} />
        {setLabelTextLang(language, wordsHumidity)}: {humidity}%
      </p>
      <p className={styles.pClouds}>
        <RiCloudLine className={styles.icons} />{' '}
        {setLabelTextLang(language, wordsCloudindess)}: {clouds}%
      </p>
    </div>
  );
}

export default DailyWeather;
