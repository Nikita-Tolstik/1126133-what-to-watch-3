import React from 'react';
import {MarkFilm} from '../const.js';

const ALL_GENRES = `All genres`;

const Options = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
};

const TimeSettings = {
  HOUR: `h`,
  MINUTE: `m`,
  MINUTE_IN_HOURS: 60,
};

export const TypeFilter = {
  ODD: `ODD`,
  EVEN: `EVEN`,
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

export const parseRunTime = (time) => {
  let parsedTime;

  if (time < TimeSettings.MINUTE_IN_HOURS) {
    parsedTime = `${time}${TimeSettings.MINUTE}`;
  } else {
    parsedTime = `${Math.floor(time / TimeSettings.MINUTE_IN_HOURS)}${TimeSettings.HOUR} ${time % TimeSettings.MINUTE_IN_HOURS}${TimeSettings.MINUTE}`;
  }

  return parsedTime;
};

export const filterElement = (elements, type) => {
  let filteredElements;

  switch (type) {
    case TypeFilter.EVEN:
      filteredElements = elements.filter((it, i) => ++i % 2 !== 1);
      break;
    case TypeFilter.ODD:
      filteredElements = elements.filter((it, i) => ++i % 2 === 1);
      break;
  }

  return filteredElements;
};

export const getSimilarFilms = (films, currentFilm) => {
  const filteredFilms = films.filter((it) => it.genre === currentFilm.genre && it.id !== currentFilm.id).slice(0, 4);

  return filteredFilms;
};

export const getTimeElapsed = (currentTime, duration) => {
  const time = duration - currentTime;

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  return `${hours >= 1 ? `${hours}:` : ``}${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const getProgress = (currentTime, duration) => {
  return Math.round(100 - (1 - currentTime / duration) * 100);
};

export const parseDate = (date) => {
  return new Date(date).toLocaleString(`en-US`, Options);
};

export const getMarkupStars = (stars) => {
  const lastIndex = stars.length - 1;

  const markup = stars.map((it, i) => {
    return (
      <React.Fragment key={it}>
        {`${it}${lastIndex !== i && `,`}`}<br />
      </React.Fragment>
    );
  });

  return markup;
};
