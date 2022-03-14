import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './weathercity.scss';
// import dayjs from 'dayjs';
import { requestMeteo } from '../../requests/weatherCitiesRequest';
import plafondNuageux from '../../utils/plafondNuageux';

function Wearthercity({
  className,
  city,
  // code,
  lat,
  lon,
  // plafond,
  ...rest
}) {
  const [temperature, setTemperature] = useState(null);
  const [weather, setweather] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [longitude, setLon] = useState(null);
  const [latitude, setLat] = useState(null);
  const [windDeg, setWindDeg] = useState(null);
  const [humidity, setHumidity] = useState(null);

  // const date = new Date();
  // console.log(`${date.getHours()}:${date.getMinutes()}`);
  // console.log(date);
  // console.log(dayjs().format('H:mm'));

  useEffect(async () => {
    const response = await requestMeteo(lat, lon);
    // console.log('lat', response.data.coord.lat);
    // console.log('lon', response.data.coord.lon);
    // console.log('name', response.data.name);
    // const numerateur = ((17.27 * 7 / (237.7 + 7)) + Math.log(0.87));
    // const a = 17.27;
    // const b = 237.7;
    // const pointDeRosee = (b * numerateur) / (a - numerateur);
    // const plafondNuageux = (((7 - pointDeRosee) * 400) / 3.2808);

    // console.log('point de rosee en degre', pointDeRosee);
    // console.log('plafond nuageux en mètres', plafondNuageux);

    const myData = response.data;
    if (response.status === 200) {
      setTemperature(
        myData.main.temp,
      );
      setweather(
        myData.weather[0].description,
      );
      setWindSpeed(
        myData.wind.speed,
      );
      setLon(
        myData.coord.lon,
      );
      setLat(
        myData.coord.lat,
      );
      setWindDeg(
        myData.wind.deg,
      );
      setHumidity(
        myData.main.humidity,
      );
    }
  }, [lat, lon]);

  return (
    <div
      className={classnames('weathercity', className)}
      {...rest}
    >
      <div className="city">{city} </div>
      <div className="meteowidget-temperature">
        {Math.round(temperature)}°
      </div>
      <div className="meteowidget-temperature">
        {weather}
      </div>
      <div className="meteowidget-autre">
        Vitesse du vent : {windSpeed} m/s
      </div>
      <div className="meteowidget-autre">
        Direction Vent : {windDeg} degrés
      </div>
      <div className="meteowidget-autre">
        Longitude : {longitude}
      </div>
      <div className="meteowidget-autre">
        Latitude : {latitude}
      </div>
      <div className="meteowidget-autre">
        Humidité: {humidity} %
      </div>
      <div className="meteowidget-autre">
        Plafond nuageux : {Math.round(plafondNuageux(temperature, humidity))} m
      </div>
    </div>
  );
}

Wearthercity.propTypes = {
  className: PropTypes.string,
  city: PropTypes.string.isRequired,
  // code: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  // plafond: PropTypes.number.isRequired,
};
Wearthercity.defaultProps = {
  className: '',
};
export default React.memo(Wearthercity);
