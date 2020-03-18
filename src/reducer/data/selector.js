import {createSelector} from 'reselect';
import NameSpace from '../name-space.js';
import {getGenre} from '../app/selector.js';

const ALL_GENRES = `All genres`;

export const getFilms = (state) => {
  return state[NameSpace.DATA].films;
};


export const getFilteredFilms = createSelector(
    getFilms,
    getGenre,

    (films, genre) => {
      const filteredFilms = ALL_GENRES === genre ? films : films.filter((it) => it.genre === genre);

      return filteredFilms;
    }
);

