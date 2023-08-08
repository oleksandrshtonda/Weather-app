import styles from './Header.module.css';
import ChangeLang from './ChangeLang';
import setLabelTextLang from './translateLang';
import ChooseCity from '../Weather/ChooseCity';
import { wordsHeader } from '../Data/wordsTranslate';

function Header({ language, setLanguage, country, setCountry, city, setCity }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{setLabelTextLang(language, wordsHeader)}</h1>
      <ChangeLang language={language} setLanguage={setLanguage} />
      <ChooseCity
        language={language}
        setLanguage={setLanguage}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
      />
    </header>
  );
}

export default Header;
