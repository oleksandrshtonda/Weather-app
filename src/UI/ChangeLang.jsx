import styles from './ChangeLang.module.css';
import setLabelTextLang from './translateLang';
import { wordsLangs } from '../Data/wordsTranslate';

function ChangeLang({ language, setLanguage }) {
  return (
    <div className={styles.selectMenu}>
      <label htmlFor="changeLanguage" className={styles.legendOfSelect}>
        {setLabelTextLang(language, wordsLangs)}
      </label>
      <select
        name="changeLanguage"
        className={styles.selectLangOption}
        onChange={(event) => setLanguage(event.target.value)}
        value={language}
      >
        <option value="en-EN">English</option>
        <option value="pl-PL">Polski</option>
        <option value="ru-RU">Русский</option>
        <option value="uk">Українська</option>
        <option value="be">Беларуская</option>
        <option value="de">Deutsche</option>
        <option value="cs">Čeština</option>
        <option value="nl">Nederlands</option>
      </select>
    </div>
  );
}

export default ChangeLang;
