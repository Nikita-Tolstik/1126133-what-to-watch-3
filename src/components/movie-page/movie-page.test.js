import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import MoviePage from './movie-page.jsx';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';
import {AppRoute} from '../../const.js';

const mockStore = configureStore([]);

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

const children = <div className="children-component" />;


it(`Render MoviePage - authorizationStatus = AUTH`, () => {

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
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MoviePage
            onCardFilmClick={() => {}}
          >
            {children}
          </MoviePage>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();


  expect(tree).toMatchSnapshot();

});

it(`Render MoviePage - authorizationStatus = NO_AUTH`, () => {

  history.push(`${AppRoute.FILMS}/1`);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: 1,
      films: mockFilms,
      favoriteFilms: [],
      promoFilm: mockFilm,
      isError: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      userInfo: `no info`,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MoviePage
            onCardFilmClick={() => {}}
          >
            {children}
          </MoviePage>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();


  expect(tree).toMatchSnapshot();

});

it(`Render MoviePage - No similar movies`, () => {

  history.push(`${AppRoute.FILMS}/9`);

  const store = mockStore({
    [NameSpace.DATA]: {
      currentId: 9,
      films: mockFilms,
      favoriteFilms: [],
      promoFilm: mockFilm,
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      userInfo: `no info`,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MoviePage
            onCardFilmClick={() => {}}
          >
            {children}
          </MoviePage>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();


  expect(tree).toMatchSnapshot();

});
