/* eslint-disable import/prefer-default-export */
import apiAxios from './index';

export async function requestMeteo(codePostal) {
  try {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await apiAxios.get(
      apiAxios.baseURL,
      {
        params: {
          zip: `${codePostal},fr`,
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
