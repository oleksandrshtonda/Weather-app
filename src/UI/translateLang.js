function setLabelTextLang(language, array) {
  switch (language) {
    case 'en-EN':
      return array[0];
    case 'pl-PL':
      return array[1];
    case 'ru-RU':
      return array[2];
    case 'uk':
      return array[3];
    case 'be':
      return array[4];
    case 'de':
      return array[5];
    case 'cs':
      return array[6];
    case 'nl':
      return array[7];
    default:
      return array[0];
  }
}

export default setLabelTextLang;
