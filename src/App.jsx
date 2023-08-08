import { useState } from 'react';
import './App.css';
import Weather from './Weather/Weather';
import Header from './UI/Header';
import Footer from './UI/Footer';

function App() {
  const [language, setLanguage] = useState('en-EN');
  const [country, setCountry] = useState('ukraine');
  const [city, setCity] = useState('kyiv');

  return (
    <div className="App">
      <Header
        language={language}
        setLanguage={setLanguage}
        country={country}
        setCountry={setCountry}
        city={city}
        setCity={setCity}
      />
      <Weather
        className="content"
        language={language}
        country={country}
        city={city}
      />
      <Footer language={language} />
    </div>
  );
}

export default App;
