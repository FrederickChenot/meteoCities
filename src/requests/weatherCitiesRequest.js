/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestMeteo(lat, lon) {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await apiAxios.get(
      apiAxios.baseURL,
      {
        params: {
          lat: `${lat}`,
          lon: `${lon}`,
          // zip: `${codePostal},fr`,
          units: 'metric',
          appid: apiKey,
          lang: 'fr',
        },
      },
    );
    return response;
  }
  catch (err) {
    return err.response;
  }
}
