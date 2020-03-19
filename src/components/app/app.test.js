import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import App from './app.jsx';
import NameSpace from '../../reducer/name-space.js';


const mockStore = configureStore([]);

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

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

const ALL_GENRES = `All genres`;

it(`Render <App />`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mocks,
    },
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            title={MockSettings.TITLE}
            genre={MockSettings.GENRE}
            year={MockSettings.YEAR}
            selectFilm={0}
            onCardFilmClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
