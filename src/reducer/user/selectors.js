import NameSpace from "../name-space.js";

export const getAuthorizationStatus = (state) => {
  return state[NameSpace.USER].authorizationStatus;
};

export const getUserInfo = (state) => {
  return state[NameSpace.USER].userInfo;
};

export const getStatus = (state) => {
  return state[NameSpace.USER].responseStatus;
};
