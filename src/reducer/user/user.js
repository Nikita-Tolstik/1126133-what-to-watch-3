import {extend} from '../../utils/utils.js';
import {AppRoute, HistoryAction} from '../../const.js';
import history from '../../history.js';

const NO_USER_INFO = `NO_USER_INFO`;
const AVATAR_URL = `avatar_url`;


const Status = {
  BAD_REQUEST: 400,
  RESET: 0,
};

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
  PENDING: `PENDING`,
  INITIAL: `INITIAL`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.INITIAL,
  userInfo: NO_USER_INFO,
  responseStatus: Status.RESET,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SAVE_USER_INFO: `SAVE_USER_INFO`,
  PUT_STATUS: `PUT_STATUS`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  saveUserInfo: (userInfo) => {
    return {
      type: ActionType.SAVE_USER_INFO,
      payload: userInfo,
    };
  },

  putStatus: (status) => {
    return {
      type: ActionType.PUT_STATUS,
      payload: status,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.saveUserInfo(response.data[AVATAR_URL]));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
  },

  login: (authData, onError) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
    .then((response) => {
      if (history.action === HistoryAction.POP) {
        history.push(AppRoute.ROOT);
      } else {
        history.goBack();
      }

      dispatch(ActionCreator.saveUserInfo(response.data[AVATAR_URL]));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      onError();
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SAVE_USER_INFO:
      return extend(state, {
        userInfo: action.payload,
      });
    case ActionType.PUT_STATUS:
      return extend(state, {
        responseStatus: action.payload,
      });
  }

  return state;
};


export {ActionCreator, ActionType, AuthorizationStatus, Operation, Status, reducer};
