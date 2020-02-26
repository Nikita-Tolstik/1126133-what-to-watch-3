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

  getFilteredFilms: (genre) => {

    const filteredFilms = filterFilms(genre);

    return {
      type: Action.GET_FILTERED_FILMS,
      payload: filteredFilms,
    };
  },
};


const filterFilms = (genre) => {

  const filteredFilms = ALL_GENRES === genre ? films : films.filter((it) => it.genre === genre);

  return filteredFilms;
};

const getGenresList = () => {
  const allGenres = films.map((it) => it.genre);
  const uniqueGenres = Array.from(new Set(allGenres)).sort();

  return [ALL_GENRES, ...uniqueGenres.slice(0, 10)];
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    case Action.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case Action.GET_FILTERED_FILMS:
      return extend(state, {
        filteredFilms: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, getGenresList};
