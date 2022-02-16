import './App.scss';
import Weathercity from '../WeatherCities/Weathercity';

function App() {
  return (
    <div className="app">
      <Weathercity city="Jeuxey" code={88000} />
      <Weathercity city="Aix en provence" code={13000} />
      <Weathercity city="Brest" code={29200} />
      <Weathercity city="Bordeaux" code={33000} />
      <Weathercity city="Paris" code={75000} />
      <Weathercity city="Lille" code={59000} />
      <Weathercity city="Lyon" code={69001} />
    </div>
  );
}

export default App;
