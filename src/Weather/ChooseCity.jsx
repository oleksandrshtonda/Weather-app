import styles from './Choose.module.css';
import setLabelTextLang from '../UI/translateLang';
import countries from '../Data/countriesCity';
import {
  wordsChooseCity,
  wordsCity,
  wordsCountry,
} from '../Data/wordsTranslate';

function ChooseCity({ language, country, setCountry, city, setCity }) {
  return (
    <>
      <div className={styles.selectMenu2}>
        <label htmlFor="chooseCountry" className={styles.legendOfSelect}>
          {setLabelTextLang(language, wordsCountry)}
        </label>
        <select
          name="chooseCountry"
          className={styles.selectLangOption}
          onChange={(event) => setCountry(event.target.value)}
          value={country}
        >
          {Object.keys(countries).map((country, index) => {
            return (
              <option key={index} value={country}>
                {countries[country]['nameCountry']}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles.selectMenu1}>
        <label htmlFor="chooseCity" className={styles.legendOfSelect}>
          {setLabelTextLang(language, wordsCity)}
        </label>
        <select
          name="chooseCity"
          className={styles.selectLangOption}
          onChange={(event) => setCity(event.target.value)}
          value={city}
        >
          <option>**{setLabelTextLang(language, wordsChooseCity)}**</option>
          {Object.keys(countries[country].cities).map((city, index) => {
            return (
              <option value={city} key={index}>
                {countries[country].cities[city].nameCity}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
export default ChooseCity;
