import styles from './Footer.module.css';
import setLabelTextLang from './translateLang';
import { wordsLeftLabel, wordsRightLabel } from '../Data/wordsTranslate';

function Footer({ language }) {
  return (
    <footer className={styles.footer}>
      <p className={styles.leftP}>
        {setLabelTextLang(language, wordsLeftLabel)}
      </p>
      <p className={styles.rightP}>
        {setLabelTextLang(language, wordsRightLabel)}
        <a href="https:/t.me/wildovaniy">Wildovaniy</a>
      </p>
    </footer>
  );
}

export default Footer;
