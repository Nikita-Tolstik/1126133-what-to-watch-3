import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {getGenre} from '../logic/selector.js';

const ALL_GENRES = `All genres`;
const NO_CURRENT_FILM = -1;

export const getCurrentId = (state) => {
  return state[NameSpace.DATA].currentId;
};

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};

export const getPromoFilm = (state) => {
  return state[NameSpace.DATA].promoFilm;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.DATA].favoriteFilms;
};

export const getIsError = (state) => {
  return state[NameSpace.DATA].isError;
};

export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,

    (films, genre) => ALL_GENRES === genre ? films : films.filter((film) => film.genre === genre)
);

export const getCurrentFilm = createSelector(
    getFilms,
    getCurrentId,

    (films, id) => {

      if (id === NO_CURRENT_FILM || films.length === 0) {
        return NO_CURRENT_FILM;
      }

      return films.find((film) => film.id === id);
    }
);
