import axios from 'axios';

const Error = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const createAPI = (onUnauthorized, onErrorStatus, onErrorScreenShow) => {
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


    switch (response.status) {
      case Error.UNAUTHORIZED:
        onUnauthorized();
        break;
      case Error.BAD_REQUEST:
        onErrorStatus(response.status);
        break;
      default:
        onErrorScreenShow(`${response.status}. ${response.data.error}`);
        break;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
