import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import App from './app.jsx';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';
import {AppRoute} from '../../const.js';


const mockStore = configureStore([]);

const ALL_GENRES = `All genres`;
const START_COUNT = 8;


const mockFilms = [
  {
    id: 1,
    title: `1`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Thriller`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 2,
    title: `2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Thriller`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 3,
    title: `3`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Thriller`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 4,
    title: `4`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Thriller`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 5,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 6,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 7,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 8,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 9,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Comedy`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 10,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 11,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 12,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
];

const mockFilm = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald2`,
  posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `Fantastic Beasts: The Crimes of Grindelwald`,
  rating: 5,
  scoresCount: 7,
  director: `Wes Andreson`,
  stars: [`Bill Murray`, `Edward Norton`, `Jude Law`],
  runTime: 55,
  genre: `Thriller`,
  released: 44,
  isFavorite: true,
  videoLink: `https://upload.wikimedia.org/`,
  videoPreview: `https://upload.wikimedia.org/`,
};

const mockComments = [
  {
    id: 1,
    userName: `Sophie`,
    rating: 3,
    comment: `Unfortunately we don't have a reliable way.`,
    date: `2020-03-08T18:06:46.267Z`,
  },
  {
    id: 2,
    userName: `Sophie`,
    rating: 3,
    comment: `Unfortunately we don't have a reliable way.`,
    date: `2020-03-08T18:06:46.267Z`,
  },
  {
    id: 3,
    userName: `Sophie`,
    rating: 3,
    comment: `Unfortunately we don't have a reliable way.`,
    date: `2020-03-08T18:06:46.267Z`,
  }
];

const UserStatus = {
  BAD_REQUEST: 400,
  RESET: 0,
};

const ReviewStatus = {
  OK: `OK`,
  PENDING: `PENDING`,
  ERROR: `ERROR`,
};

it(`Render App - page Main with AUTH`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: -1,
      films: mockFilms,
      favoriteFilms: mockFilms,
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: [],
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});

it(`Render App - page Main with NO_AUTH and with Error message`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: -1,
      films: mockFilms,
      favoriteFilms: [],
      promoFilm: mockFilm,
      isError: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      userInfo: `no info`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: mockComments,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});


it(`Render App - page Movie with NO_AUTH`, () => {

  history.push(`${AppRoute.FILMS}/1`);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: 1,
      films: mockFilms,
      favoriteFilms: [],
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      userInfo: `no info`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: mockComments,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});

it(`Render App - page Movie with AUTH`, () => {

  history.push(`${AppRoute.FILMS}/1`);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: 1,
      films: mockFilms,
      favoriteFilms: mockFilms,
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: mockComments,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});


it(`Render App - page AddReview go to Sing In`, () => {

  history.push(`${AppRoute.FILMS}/1${AppRoute.REVIEW}`);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: -1,
      films: mockFilms,
      favoriteFilms: mockFilms,
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: mockComments,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});

it(`Render App - page MyList go to Sing In`, () => {

  history.push(AppRoute.MY_LIST);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: -1,
      films: mockFilms,
      favoriteFilms: mockFilms,
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
      responseStatus: UserStatus.RESET,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
      comments: mockComments,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
      countShownFilms: START_COUNT,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <App
          >
          </App>
        </Provider>
      </Router>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});

