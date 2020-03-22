import {extend} from '../../utils/utils.js';
import {ActionCreator as ActionCreatorScreen, ScreenType} from '../screen-type/screen-type.js';

const NO_USER_INFO = `no`;
const AVATAR_URL = `avatar_url`;

const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userInfo: NO_USER_INFO,
  responseStatus: 0,
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

  login: (authData) => (dispatch, _getState, api) => {
    return api.post(`/login`, {
      email: authData.email,
      password: authData.password,
    })
    .then((response) => {
      dispatch(ActionCreatorScreen.changeScreen(ScreenType.WELCOME));
      dispatch(ActionCreator.saveUserInfo(response.data[AVATAR_URL]));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
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


export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};
