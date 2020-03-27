import {reducer, ActionCreator, ActionType} from './logic.js';

const Genres = {
  ALL: `All genres`,
  FANTASY: `Fantasy`,
  ACTION: `Action`,
};

const START_COUNT = 8;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
    countShownFilms: START_COUNT,
  });
});

it(`Reducer should change on FANTASY`, () => {
  expect(reducer({
    genre: Genres.ALL,
    countShownFilms: START_COUNT,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.FANTASY,
  })).toEqual({
    genre: Genres.FANTASY,
    countShownFilms: START_COUNT,
  });
});

it(`Reducer should change on Action`, () => {
  expect(reducer({
    genre: Genres.FANTASY,
    countShownFilms: START_COUNT,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  })).toEqual({
    genre: Genres.ACTION,
    countShownFilms: START_COUNT,
  });
});

it(`ActionCreator work correctly`, () => {

  expect(ActionCreator.changeGenre(Genres.ACTION)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  });
});
