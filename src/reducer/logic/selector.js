import NameSpace from '../name-space.js';

export const getGenre = (state) => {
  return state[NameSpace.LOGIC].genre;
};