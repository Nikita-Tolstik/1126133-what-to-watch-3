import {extend} from '../../utils/utils.js';
import {parseFilm} from '../../adapter.js';

const initialState = {
  currentId: -1,
  films: [],
  promoFilm: -1,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  SET_CURRENT_ID: `SET_CURRENT_ID`,
};

const ActionCreator = {
  loadFilms: (films) => {
    const parsedFilms = films.map((film) => parseFilm(film));

    return {
      type: ActionType.LOAD_FILMS,
      payload: parsedFilms,
    };
  },

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: parseFilm(film),
  }),

  setCurrentId: (id) => ({
    type: ActionType.SET_CURRENT_ID,
    payload: id,
  })
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.loadFilms(response.data));
    });
  },

  loadPromoFilm: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.loadPromoFilm(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.SET_CURRENT_ID:
      return extend(state, {
        currentId: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};


