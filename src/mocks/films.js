import {getRandomNumber, getRatingNumber} from '../utils/utils.js';
import {MOCKS, DESCRIPTIONS, DIRECTOR, STARRING, GENRES, VIDEO} from '../const.js';

export const films = MOCKS.map((it, i) => {

  return {
    title: it.title,
    img: it.img,
    videoPreview: VIDEO,
    genre: GENRES[i],
    year: getRandomNumber(1970, 2020),
    description: DESCRIPTIONS,
    rating: getRatingNumber(1, 10),
    quantityRatings: getRandomNumber(10, 300),
    director: DIRECTOR,
    starring: STARRING,
  };
});
