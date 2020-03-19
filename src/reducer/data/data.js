import {extend} from '../../utils/utils.js';
import {parseFilm} from '../../adapter.js';

const initialState = {
  films: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms: (films) => {

    const parsedFilms = films.map((film) => parseFilm(film));

    return {
      type: ActionType.LOAD_FILMS,
      payload: parsedFilms,
    };
  }
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadFilms(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};
