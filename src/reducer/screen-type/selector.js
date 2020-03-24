import NameSpace from '../name-space.js';

export const getScreenType = (state) => {
  return state[NameSpace.SCREEN_TYPE].screenType;
};
