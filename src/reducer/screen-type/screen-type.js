import {extend} from '../../utils/utils.js';

const ScreenType = {
  WELCOME: `WELCOME`,
  MOVIE: `MOVIE`,
  AUTH: `AUTH`,
  ADD_REVIEW: `ADD_REVIEW`,
};

const initialState = {
  screenType: ScreenType.WELCOME,
};

const ActionType = {
  CHANGE_SCREEN: `CHANGE_SCREEN`,
};

const ActionCreator = {
  changeScreen: (screenType) => {
    return {
      type: ActionType.CHANGE_SCREEN,
      payload: screenType,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SCREEN:
      return extend(state, {
        screenType: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, ScreenType};
