import {extend} from '../../utils/utils.js';
import {parseFilm} from '../../adapter.js';
import NameSpace from '../name-space.js';

const initialState = {
  currentId: -1,
  favoriteFilms: [],
  films: [],
  promoFilm: -1,
};

const ActionType = {
  SET_FILMS: `SET_FILMS`,
  SET_PROMO_FILM: `SET_PROMO_FILM`,
  SET_FAVORITE_FILMS: `SET_FAVORITE_FILMS`,
  SET_CURRENT_ID: `SET_CURRENT_ID`,
  UPDATE_STATUS_FILM: `UPDATE_STATUS_FILM`,
};

const ActionCreator = {
  setFilms: (films) => {
    const parsedFilms = films.map((film) => parseFilm(film));
    return {
      type: ActionType.SET_FILMS,
      payload: parsedFilms,
    };
  },

  setFavoriteFilms: (films) => {
    const parsedFilms = films.map((film) => parseFilm(film));
    return {
      type: ActionType.SET_FAVORITE_FILMS,
      payload: parsedFilms,
    };
  },

  updateFavoriteFilms: (film, films) => {
    const parsedFilm = parseFilm(film);
    const isFavorite = parsedFilm.isFavorite;
    let updateFilms;
    // console.log(parsedFilm);
    if (isFavorite) {
      updateFilms = films.unshift(parsedFilm);
    } else {
      // console.log(films);
      const index = films.findIndex((it) => it.id === parsedFilm.id);
      console.log(index);

      updateFilms = films.length === 0 ? [] : films.splice(index, 1);
    }

    // console.log(updateFilms);
    return {
      type: ActionType.SET_FAVORITE_FILMS,
      payload: updateFilms,
    };
  },

  setPromoFilm: (film) => ({
    type: ActionType.SET_PROMO_FILM,
    payload: parseFilm(film),
  }),

  setCurrentId: (id) => ({
    type: ActionType.SET_CURRENT_ID,
    payload: id,
  }),

  updateStatusFilm: () => ({
    type: ActionType.UPDATE_STATUS_FILM,
    payload: null,
  })
};

const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
    .then((response) => {
      dispatch(ActionCreator.setFilms(response.data));
    });
  },

  loadPromoFilm: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
    .then((response) => {
      dispatch(ActionCreator.setPromoFilm(response.data));
    });
  },

  loadFavoriteFilms: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      dispatch(ActionCreator.setFavoriteFilms(response.data));
    });
  },

  updateStatusFilm: (id, status) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      // console.log(_getState()[NameSpace.DATA].favoriteFilms);
      dispatch(ActionCreator.updateFavoriteFilms(response.data, _getState()[NameSpace.DATA].favoriteFilms));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_FILMS:
      return extend(state, {
        films: action.payload,
      });

    case ActionType.SET_PROMO_FILM:
      return extend(state, {
        promoFilm: action.payload,
      });

    case ActionType.SET_CURRENT_ID:
      return extend(state, {
        currentId: action.payload,
      });

    case ActionType.SET_FAVORITE_FILMS:
      return extend(state, {
        favoriteFilms: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};


