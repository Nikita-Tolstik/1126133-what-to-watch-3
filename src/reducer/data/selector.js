import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {getGenre} from '../logic/selector.js';

const ALL_GENRES = `All genres`;
const NO_CURRENT_FILM = -1;
const ID_PROMO_FILM = 1;

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


export const checkFavoriteFilm = createSelector(
    getFavoriteFilms,
    getCurrentId,

    (films, id) => {

      const favoriteFilmId = id === NO_CURRENT_FILM ? ID_PROMO_FILM : id;
      const findValue = films.find((film) => film.id === favoriteFilmId);
      return Boolean(findValue);
    }
);
