import {MarkFilm} from '../const.js';

export const getRandomNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};

export const getRatingNumber = (min, max) => {
  return getRandomNumber(min, max) + Number(Math.random().toFixed(1));
};

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
