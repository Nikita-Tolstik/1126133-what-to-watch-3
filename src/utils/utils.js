import {MarkFilm} from '../const.js';

const ALL_GENRES = `All genres`;

export const getRating = (number) => {
  let level;
  switch (true) {
    case (number >= 0 && number < 3):
      level = MarkFilm.BAD;
      break;
    case (number >= 3 && number < 5):
      level = MarkFilm.NORMAL;
      break;
    case (number >= 5 && number < 8):
      level = MarkFilm.GOOD;
      break;
    case (number >= 8 && number < 10):
      level = MarkFilm.VERY_GOOD;
      break;
    case (number === 10):
      level = MarkFilm.AWESOME;
      break;

  }
  return level;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getGenres = (initialFilms) => {
  const allGenres = initialFilms.map((it) => it.genre);
  const uniqueGenres = new Set(allGenres);
  const listGenres = Array.from(uniqueGenres).sort();
  const genres = [ALL_GENRES, ...listGenres.slice(0, 10)];

  return genres;
};
