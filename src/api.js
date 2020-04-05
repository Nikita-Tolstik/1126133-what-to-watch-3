import axios from 'axios';
import {Error} from './const.js';

export const createAPI = (onUnauthorized, onErrorStatus, onServerErrorSet) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;


    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
    } else if (response.status === Error.BAD_REQUEST) {
      onErrorStatus(response.status);
    } else if (response.status >= Error.SERVER) {
      onServerErrorSet();
    }


    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
