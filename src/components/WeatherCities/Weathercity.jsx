import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './weathercity.scss';
import { requestMeteo } from '../../requests/weatherCitiesRequest';

function Wearthercity({
  className,
  city,
  code,
  ...rest
}) {
  const [temperature, setTemperature] = useState(null);

  useEffect(async () => {
    const response = await requestMeteo(code);
    if (response.status === 200) {
      setTemperature(
        response.data.main.temp,
      );
      console.log(response.data.name);
    }
  }, [code]);

  return (
    <div
      className={classnames('weathercity', className)}
      {...rest}
    >
      <div className="city">{city} </div>
      <div className="meteowidget-temperature">
        {Math.round(temperature)}°
      </div>
    </div>
  );
}

Wearthercity.propTypes = {
  className: PropTypes.string,
  city: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
Wearthercity.defaultProps = {
  className: '',
};
export default React.memo(Wearthercity);
