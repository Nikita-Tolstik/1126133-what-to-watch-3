import {reducer, ActionCreator, ActionType} from './logic.js';

const Genres = {
  ALL_GENRES: `All genres`,
  FANTASY: `Fantasy`,
  ACTION: `Action`,
};

const START_COUNT = 8;

it(`Reducer without parameters - return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL_GENRES,
    countShownFilms: START_COUNT,
  });
});

it(`Reducer with parameters - return genre FANTASY`, () => {
  expect(reducer({
    genre: Genres.ALL_GENRES,
    countShownFilms: START_COUNT,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.FANTASY,
  })).toEqual({
    genre: Genres.FANTASY,
    countShownFilms: START_COUNT,
  });
});

it(`Reducer with parameters - return genre ACTION`, () => {
  expect(reducer({
    genre: Genres.ALL_GENRES,
    countShownFilms: START_COUNT,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  })).toEqual({
    genre: Genres.ACTION,
    countShownFilms: START_COUNT,
  });
});

it(`Reducer with parameters - should return countShownFilms: 10`, () => {
  expect(reducer({
    genre: Genres.ALL_GENRES,
    countShownFilms: START_COUNT,
  }, {
    type: ActionType.INCREASE_COUNT_FILMS,
    payload: 10,
  })).toEqual({
    genre: Genres.ALL_GENRES,
    countShownFilms: 10,
  });
});

it(`Reducer with parameters - should return START_COUNT = 8`, () => {
  expect(reducer({
    genre: Genres.ALL_GENRES,
    countShownFilms: 20,
  }, {
    type: ActionType.RESET_COUNT_FILMS,
    payload: START_COUNT,
  })).toEqual({
    genre: Genres.ALL_GENRES,
    countShownFilms: START_COUNT,
  });
});

it(`ActionCreator.changeGenre work correctly`, () => {

  expect(ActionCreator.changeGenre(Genres.ACTION)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  });
});

it(`ActionCreator.increaseCount work correctly`, () => {

  expect(ActionCreator.increaseCount(20)).toEqual({
    type: ActionType.INCREASE_COUNT_FILMS,
    payload: 28,
  });
});

it(`ActionCreator.resetCount work correctly`, () => {

  expect(ActionCreator.resetCount()).toEqual({
    type: ActionType.RESET_COUNT_FILMS,
    payload: START_COUNT,
  });
});

