import {films} from './mocks/films.js';
import {extend} from './utils/utils.js';

const ALL_GENRES = `All genres`;

const initialState = {
  genre: ALL_GENRES,
  filteredFilms: films,
};

const Action = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};

const ActionCreator = {

  changeGenre: (genre) => ({
    type: Action.CHANGE_GENRE,
    payload: genre,
  }),

  getFilteredFilms: () => {

    const filteredFilms = [];

    return {
      type: Action.GET_FILTERED_FILMS,
      payload: filteredFilms,
    };
  },
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case Action.CHANGE_GENRE:
      // Попробовать реализовать блокировку выбора активного жанра
      if (state.genre !== action.payload) {
        return extend(state, {
          genre: action.payload,
        });
      }
      break;

    case Action.GET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });
  }

  return state;
};

export {reducer};
