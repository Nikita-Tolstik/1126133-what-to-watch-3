import React from 'react';
import renderer from 'react-test-renderer';
import {GenresList} from './genres-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);


const GENRES = [
  `All genres`,
  `Fantasy`,
  `Thrillers`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Action`,
  `Animation`,
  `Comedies`,
];

const mocks = [
  {
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
    starring: `Bill Murray, Edward Norton, Jude Law`,
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 2,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
  {
    id: 4,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    description: `Fantastic Beasts: The Crimes of Grindelwald`,
    rating: 5,
    scoresCount: 7,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    runTime: 55,
    genre: `Action`,
    released: 44,
    isFavorite: true,
    videoLink: `https://upload.wikimedia.org/`,
    videoPreview: `https://upload.wikimedia.org/`,
  },
];

const Genres = {
  ALL: `All genres`,
  FANTASY: `Fantasy`
};

it(`Render <GenresList - Active-genre is All genres/>`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mocks,
    },
    [NameSpace.LOGIC]: {
      genre: Genres.ALL,
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <GenresList

          onGenreClick={() => {}}
          activeGenre={Genres.ALL}
          genres={GENRES}
          onCountShownFilmsReset={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render <GenresList - Active-genre is Fantasy/>`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mocks,
    },
    [NameSpace.LOGIC]: {
      genre: Genres.FANTASY,
    },
  });
  const tree = renderer.create(
      <Provider store={store}>
        <GenresList

          onGenreClick={() => {}}
          activeGenre={Genres.FANTASY}
          genres={GENRES}
          onCountShownFilmsReset={() => {}}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
