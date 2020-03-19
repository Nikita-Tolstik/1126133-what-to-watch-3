import {reducer, ActionCreator, ActionType} from './logic.js';

const Genres = {
  ALL: `All genres`,
  FANTASY: `Fantasy`,
  ACTION: `Action`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    genre: Genres.ALL,
  });
});

it(`Reducer should change on FANTASY`, () => {
  expect(reducer({
    genre: Genres.ALL,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.FANTASY,
  })).toEqual({
    genre: Genres.FANTASY,
  });
});

it(`Reducer should change on Action`, () => {
  expect(reducer({
    genre: Genres.FANTASY,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  })).toEqual({
    genre: Genres.ACTION,
  });
});

it(`ActionCreator work correctly`, () => {

  expect(ActionCreator.changeGenre(Genres.ACTION)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genres.ACTION,
  });
});
