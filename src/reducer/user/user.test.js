import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from './user.js';
import {noop} from '../../utils/utils.js';

const api = createAPI(noop, noop, noop);
const NO_USER_INFO = `NO_USER_INFO`;
const USER_INFO = `Alex`;
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


it(`Reducer without parameters - return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.INITIAL,
    userInfo: NO_USER_INFO,
    responseStatus: Status.RESET,
  });
});

it(`Reducer with parameters - change authorizationStatus PENDING`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.INITIAL,
    userInfo: NO_USER_INFO,
    responseStatus: Status.RESET,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.PENDING,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.PENDING,
    userInfo: NO_USER_INFO,
    responseStatus: Status.RESET,
  });
});

it(`Reducer with parameters - SAVE_USER_INFO`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: NO_USER_INFO,
    responseStatus: Status.RESET,
  }, {
    type: ActionType.SAVE_USER_INFO,
    payload: USER_INFO,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: USER_INFO,
    responseStatus: Status.RESET,
  });
});

it(`Reducer with parameters - PUT_STATUS`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: USER_INFO,
    responseStatus: Status.RESET,
  }, {
    type: ActionType.PUT_STATUS,
    payload: Status.BAD_REQUEST,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    userInfo: USER_INFO,
    responseStatus: Status.BAD_REQUEST,
  });
});

it(`ActionCreator.requireAuthorization work correctly`, () => {
  expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH,
  });
});

it(`ActionCreator.saveUserInfo work correctly`, () => {
  expect(ActionCreator.saveUserInfo(USER_INFO)).toEqual({
    type: ActionType.SAVE_USER_INFO,
    payload: USER_INFO,
  });
});

it(`ActionCreator.putStatus work correctly`, () => {
  expect(ActionCreator.putStatus(Status.RESET)).toEqual({
    type: ActionType.PUT_STATUS,
    payload: Status.RESET,
  });
});

describe(`Operation.checkAuth work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {[AVATAR_URL]: USER_INFO});

    return checkAuth(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.SAVE_USER_INFO,
        payload: USER_INFO,
      });
    });
  });
});


describe(`Operation.login work correctly`, () => {

  const authData = {
    email: `email`,
    password: `password`,
  };

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const login = Operation.login(authData, noop);

    apiMock
      .onPost(`/login`)
      .reply(200, {[AVATAR_URL]: USER_INFO});

    return login(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SAVE_USER_INFO,
        payload: USER_INFO,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
    });
  });
});
