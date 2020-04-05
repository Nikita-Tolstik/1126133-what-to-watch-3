import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from './data.js';
import {noop} from '../../utils/utils.js';

const api = createAPI(noop, noop, noop);

const NO_CURRENT_FILM = -1;

const mockOriginalFilms = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 2,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 4,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
];


const mockFilms = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 2,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 4,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
];

const mockPromoFilm = {
  id: 5,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
  previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
  description: `Fantastic Beasts: The Crimes of Grindelwald`,
  rating: 3,
  scoresCount: 6,
  director: `Fantastic Beasts: The Crimes of Grindelwald`,
  stars: [`Bill Murray, Edward Norton, Jude Law`],
  runTime: 66,
  genre: `Fantastic Beasts: The Crimes of Grindelwald`,
  released: 55,
  isFavorite: true,
  videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
  videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
};

const mockServerFilms = [
  {
    'id': 1,
    'name': `Fantastic Beasts: The Crimes of Grindelwald`,
    'poster_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_color': `Fantastic Beasts: The Crimes of Grindelwald`,
    'description': `Fantastic Beasts: The Crimes of Grindelwald`,
    'rating': 3,
    'scores_count': 6,
    'director': `Fantastic Beasts: The Crimes of Grindelwald`,
    'starring': [`Bill Murray, Edward Norton, Jude Law`],
    'run_time': 66,
    'genre': `Fantastic Beasts: The Crimes of Grindelwald`,
    'released': 55,
    'is_favorite': true,
    'video_link': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    'id': 2,
    'name': `Fantastic Beasts: The Crimes of Grindelwald`,
    'poster_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_color': `Fantastic Beasts: The Crimes of Grindelwald`,
    'description': `Fantastic Beasts: The Crimes of Grindelwald`,
    'rating': 3,
    'scores_count': 6,
    'director': `Fantastic Beasts: The Crimes of Grindelwald`,
    'starring': [`Bill Murray, Edward Norton, Jude Law`],
    'run_time': 66,
    'genre': `Fantastic Beasts: The Crimes of Grindelwald`,
    'released': 55,
    'is_favorite': true,
    'video_link': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    'id': 3,
    'name': `Fantastic Beasts: The Crimes of Grindelwald`,
    'poster_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_color': `Fantastic Beasts: The Crimes of Grindelwald`,
    'description': `Fantastic Beasts: The Crimes of Grindelwald`,
    'rating': 3,
    'scores_count': 6,
    'director': `Fantastic Beasts: The Crimes of Grindelwald`,
    'starring': [`Bill Murray, Edward Norton, Jude Law`],
    'run_time': 66,
    'genre': `Fantastic Beasts: The Crimes of Grindelwald`,
    'released': 55,
    'is_favorite': true,
    'video_link': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald`
  },
  {
    'id': 4,
    'name': `Fantastic Beasts: The Crimes of Grindelwald`,
    'poster_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_image': `Fantastic Beasts: The Crimes of Grindelwald`,
    'background_color': `Fantastic Beasts: The Crimes of Grindelwald`,
    'description': `Fantastic Beasts: The Crimes of Grindelwald`,
    'rating': 3,
    'scores_count': 6,
    'director': `Fantastic Beasts: The Crimes of Grindelwald`,
    'starring': [`Bill Murray, Edward Norton, Jude Law`],
    'run_time': 66,
    'genre': `Fantastic Beasts: The Crimes of Grindelwald`,
    'released': 55,
    'is_favorite': true,
    'video_link': `Fantastic Beasts: The Crimes of Grindelwald`,
    'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald`
  },
];

const updatedFavoriteFilms = [
  {
    id: 5,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 2,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    id: 4,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    posterImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundImage: `Fantastic Beasts: The Crimes of Grindelwald`,
    backgroundColor: `Fantastic Beasts: The Crimes of Grindelwald`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 3,
    scoresCount: 6,
    director: `Fantastic Beasts: The Crimes of Grindelwald`,
    stars: [`Bill Murray, Edward Norton, Jude Law`],
    runTime: 66,
    genre: `Fantastic Beasts: The Crimes of Grindelwald`,
    released: 55,
    isFavorite: true,
    videoLink: `Fantastic Beasts: The Crimes of Grindelwald`,
    videoPreview: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
];

const mockServerFilm = {
  'id': 5,
  'name': `Fantastic Beasts: The Crimes of Grindelwald`,
  'poster_image': `Fantastic Beasts: The Crimes of Grindelwald`,
  'preview_image': `Fantastic Beasts: The Crimes of Grindelwald`,
  'background_image': `Fantastic Beasts: The Crimes of Grindelwald`,
  'background_color': `Fantastic Beasts: The Crimes of Grindelwald`,
  'description': `Fantastic Beasts: The Crimes of Grindelwald`,
  'rating': 3,
  'scores_count': 6,
  'director': `Fantastic Beasts: The Crimes of Grindelwald`,
  'starring': [`Bill Murray, Edward Norton, Jude Law`],
  'run_time': 66,
  'genre': `Fantastic Beasts: The Crimes of Grindelwald`,
  'released': 55,
  'is_favorite': true,
  'video_link': `Fantastic Beasts: The Crimes of Grindelwald`,
  'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald`
};


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    currentId: NO_CURRENT_FILM,
    favoriteFilms: [],
    films: [],
    promoFilm: NO_CURRENT_FILM,
    isError: false,
  });
});

it(`Reducer with parameters - return currentId = 2`, () => {
  expect(reducer(void 0, {
    type: ActionType.SET_CURRENT_ID,
    payload: 2,
  })).toEqual({
    currentId: 2,
    favoriteFilms: [],
    films: [],
    promoFilm: NO_CURRENT_FILM,
    isError: false,
  });
});

it(`Reducer with parameters - return favoriteFilms`, () => {
  expect(reducer(void 0, {
    type: ActionType.SET_FAVORITE_FILMS,
    payload: mockFilms,
  })).toEqual({
    currentId: NO_CURRENT_FILM,
    favoriteFilms: mockFilms,
    films: [],
    promoFilm: NO_CURRENT_FILM,
    isError: false,
  });
});

it(`Reducer with parameters - return films`, () => {
  expect(reducer(void 0, {
    type: ActionType.SET_FILMS,
    payload: mockFilms,
  })).toEqual({
    currentId: NO_CURRENT_FILM,
    favoriteFilms: [],
    films: mockFilms,
    promoFilm: NO_CURRENT_FILM,
    isError: false,
  });
});

it(`Reducer with parameters - return promoFilm`, () => {
  expect(reducer(void 0, {
    type: ActionType.SET_PROMO_FILM,
    payload: mockPromoFilm,
  })).toEqual({
    currentId: NO_CURRENT_FILM,
    favoriteFilms: [],
    films: [],
    promoFilm: mockPromoFilm,
    isError: false,
  });
});

it(`Reducer with parameters - return isError`, () => {
  expect(reducer(void 0, {
    type: ActionType.SET_ERROR,
    payload: true,
  })).toEqual({
    currentId: NO_CURRENT_FILM,
    favoriteFilms: [],
    films: [],
    promoFilm: NO_CURRENT_FILM,
    isError: true,
  });
});

it(`Reducer with parameters - set currentId`, () => {
  expect(reducer({
    currentId: 10,
    favoriteFilms: mockFilms,
    films: mockFilms,
    promoFilm: mockPromoFilm,
    isError: true,
  }, {
    type: ActionType.SET_CURRENT_ID,
    payload: 20,
  })).toEqual({
    currentId: 20,
    favoriteFilms: mockFilms,
    films: mockFilms,
    promoFilm: mockPromoFilm,
    isError: true,
  });
});

it(`ActionCreator.setFilms work correctly`, () => {
  expect(ActionCreator.setFilms(mockServerFilms)).toEqual({
    type: ActionType.SET_FILMS,
    payload: mockFilms,
  });
});

it(`ActionCreator.setFavoriteFilms work correctly`, () => {
  expect(ActionCreator.setFavoriteFilms(mockServerFilms)).toEqual({
    type: ActionType.SET_FAVORITE_FILMS,
    payload: mockFilms,
  });
});

it(`ActionCreator.updateFavoriteFilms work correctly`, () => {
  expect(ActionCreator.updateFavoriteFilms(mockServerFilm, mockFilms)).toEqual({
    type: ActionType.SET_FAVORITE_FILMS,
    payload: updatedFavoriteFilms,
  });
});

it(`ActionCreator.setPromoFilm work correctly`, () => {
  expect(ActionCreator.setPromoFilm(mockServerFilm)).toEqual({
    type: ActionType.SET_PROMO_FILM,
    payload: mockPromoFilm,
  });
});

it(`ActionCreator.setCurrentId work correctly`, () => {
  expect(ActionCreator.setCurrentId(1)).toEqual({
    type: ActionType.SET_CURRENT_ID,
    payload: 1,
  });
});

it(`ActionCreator.updateStatusFilm work correctly`, () => {
  expect(ActionCreator.updateStatusFilm()).toEqual({
    type: ActionType.UPDATE_STATUS_FILM,
    payload: null,
  });
});

it(`ActionCreator.setError work correctly`, () => {
  expect(ActionCreator.setError()).toEqual({
    type: ActionType.SET_ERROR,
    payload: true,
  });
});

describe(`Operation work correctly`, () => {
  it(`Operation.loadFilms() Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFilms = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, mockServerFilms);

    return loadFilms(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FILMS,
        payload: mockOriginalFilms,
      });
    });
  });

  it(`Operation.loadPromoFilm() Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadPromoFilm = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, mockServerFilm);

    return loadPromoFilm(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_PROMO_FILM,
        payload: mockPromoFilm,
      });
    });
  });

  it(`Operation.loadFavoriteFilms() Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loadFavoriteFilms = Operation.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, mockServerFilms);

    return loadFavoriteFilms(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_FAVORITE_FILMS,
        payload: mockOriginalFilms,
      });
    });
  });

  it(`Operation.updateStatusFilm() Should make a correct API call to /favorite/:id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const updateStatusFilm = Operation.updateStatusFilm(`5`, `1`);

    apiMock
      .onPost(`/favorite/5/0`)
      .reply(200, mockServerFilm);

    return updateStatusFilm(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(0);
    });
  });
});
