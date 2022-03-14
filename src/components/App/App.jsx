import './App.scss';
import Weathercity from '../WeatherCities/Weathercity';
// import DateHeure from '../DateHeure/DateHeure';
// import plafondNuageux from '../../utils/plafondNuageux';

function App() {
  return (
    <div className="app">
      <Weathercity city="Le Grand Ballon Vosges" lat={47.90214494777439} lon={7.098189968320183} />
      <Weathercity city="Retiers" lat={47.916672} lon={-1.38333} />
      <Weathercity city="Gerardmer" lat={48.05494644770452} lon={48.05494644770452} />
      {/* <Weathercity city="Bordeaux" lat={48.03735933551855} lon={7.045890515757721} /> */}
      {/* <Weathercity city="Aix en provence" code={13000} />
      <Weathercity city="Brest" code={29200} />
      <Weathercity city="Bordeaux" code={33000} />
      <Weathercity city="Paris" code={75000} />
      <Weathercity city="Lille" code={59000} />
      <Weathercity city="Lyon" code={69001} /> */}
      {/* <DateHeure moment="hello" /> */}
    </div>
  );
}

export default App;
