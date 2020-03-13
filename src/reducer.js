import {films} from './mocks/films.js';
import {extend} from './utils/utils.js';

const ALL_GENRES = `All genres`;

const initialState = {
  genre: ALL_GENRES,
  initialFilms: films,
  filteredFilms: films,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILTERED_FILMS: `GET_FILTERED_FILMS`,
};


const ActionCreator = {

  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  getFilteredFilms: (genre) => {

    const filteredFilms = filterFilms(genre, films);

    return {
      type: ActionType.GET_FILTERED_FILMS,
      payload: filteredFilms,
    };
  },
};


const filterFilms = (genre, initialFilms) => {

  const filteredFilms = ALL_GENRES === genre ? initialFilms : initialFilms.filter((it) => it.genre === genre);

  return filteredFilms;
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
