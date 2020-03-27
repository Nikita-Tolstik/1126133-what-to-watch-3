import {extend} from '../../utils/utils.js';

const ALL_GENRES = `All genres`;
const START_COUNT = 8;
const INCREMENT_COUNT = 8;

const initialState = {
  genre: ALL_GENRES,
  countShownFilms: START_COUNT,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_COUNT_FILMS: `INCREASE_COUNT_FILMS`,
  RESET_COUNT_FILMS: `RESET_COUNT_FILMS`,
};


const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  increaseCount: (prevCount) => ({
    type: ActionType.INCREASE_COUNT_FILMS,
    payload: prevCount + INCREMENT_COUNT,
  }),

  resetCount: () => ({
    type: ActionType.RESET_COUNT_FILMS,
    payload: START_COUNT,
  })
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.INCREASE_COUNT_FILMS:
      return extend(state, {
        countShownFilms: action.payload,
      });

    case ActionType.RESET_COUNT_FILMS:
      return extend(state, {
        countShownFilms: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
