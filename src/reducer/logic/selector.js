import NameSpace from '../name-space.js';

export const getGenre = (state) => {
  return state[NameSpace.LOGIC].genre;
};

export const getCountShownFilms = (state) => {
  return state[NameSpace.LOGIC].countShownFilms;
};
