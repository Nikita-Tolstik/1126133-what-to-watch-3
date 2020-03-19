import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import {GenresList} from './genres-list.jsx';
import NameSpace from '../../reducer/name-space.js';

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should be click on genres-list - e2e`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mocks,
    },
    [NameSpace.LOGIC]: {
      genre: Genres.ALL,
    },
  });

  const onGenreClick = jest.fn();
  const refPrevention = jest.fn();

  const genresList = mount(
      <Provider store={store}>
        <GenresList
          activeGenre={Genres.ALL}
          genres={GENRES}
          onGenreClick={onGenreClick}
        />
      </Provider>
  );

  const genres = genresList.find(`a`).at(1);
  genres.simulate(`click`, {
    preventDefault: refPrevention,
    target: {
      tagName: `A`,
      textContent: Genres.FANTASY,
    }
  });

  expect(onGenreClick).toHaveBeenCalledTimes(1);
});

it(`Should not be click on active-genre - e2e`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      films: mocks,
    },
    [NameSpace.LOGIC]: {
      genre: Genres.ALL,
    },
  });

  const onGenreClick = jest.fn();
  const refPrevention = jest.fn();

  const genresList = mount(
      <Provider store={store}>
        <GenresList
          activeGenre={Genres.ALL}
          genres={GENRES}
          onGenreClick={onGenreClick}
        />
      </Provider>
  );

  const genres = genresList.find(`a`).at(0);
  genres.simulate(`click`, {
    preventDefault: refPrevention,
    target: {
      tagName: `A`,
      textContent: Genres.ALL,
    }
  });

  expect(onGenreClick).toHaveBeenCalledTimes(0);
});
