import React from 'react';
import {MarkFilm} from '../const.js';

const ALL_GENRES = `All genres`;

const MarkValue = {
  MIN: 0,
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};

const Options = {
  year: `numeric`,
  month: `long`,
  day: `numeric`,
};

const TimeSettings = {
  HOUR: `h`,
  MINUTE: `m`,
  MINUTE_IN_HOURS: 60,
  SECONDS_IN_HOURS: 3600,
  MORE_ONE_HOURS: 1,
  LESS_TEN_SECONDS: 10,
};

const GenresSettings = {
  MIN_GENRES: 0,
  MAX_GENRES: 10,
};

const ProgressSettings = {
  MAX_PERCENT: 100,
  MIN_PERCENT: 1,
};

export const TypeFilter = {
  ODD: `ODD`,
  EVEN: `EVEN`,
};

export const getRating = (number) => {
  let level;
  switch (true) {
    case (number >= MarkValue.MIN && number < MarkValue.BAD):
      level = MarkFilm.BAD;
      break;
    case (number >= MarkValue.BAD && number < MarkValue.NORMAL):
      level = MarkFilm.NORMAL;
      break;
    case (number >= MarkValue.NORMAL && number < MarkValue.GOOD):
      level = MarkFilm.GOOD;
      break;
    case (number >= MarkValue.GOOD && number < MarkValue.VERY_GOOD):
      level = MarkFilm.VERY_GOOD;
      break;
    case (number === MarkValue.VERY_GOOD):
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
  const genres = [ALL_GENRES, ...listGenres.slice(GenresSettings.MIN_GENRES, GenresSettings.MAX_GENRES)];

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

  const hours = Math.floor(time / TimeSettings.SECONDS_IN_HOURS);
  const minutes = Math.floor(time / TimeSettings.MINUTE_IN_HOURS);
  const seconds = Math.floor(time % TimeSettings.MINUTE_IN_HOURS);

  return `${hours >= TimeSettings.MORE_ONE_HOURS ? `${hours}:` : ``}${minutes}:${seconds < TimeSettings.LESS_TEN_SECONDS ? `0${seconds}` : seconds}`;
};

export const getProgress = (currentTime, duration) => {
  return Math.round(ProgressSettings.MAX_PERCENT - (ProgressSettings.MIN_PERCENT - currentTime / duration) * ProgressSettings.MAX_PERCENT);
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

export const noop = () => {};

