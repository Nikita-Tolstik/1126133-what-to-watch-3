import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const ALL_GENRES = `All genres`;
const FANTASY = `Fantasy`;

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
  `Adddddd`,
  `Fggdgdgf`,
];

it(`Render GenresList - active genre = All Genres`, () => {
  const store = mockStore({
    [NameSpace.LOGIC]: {
      genre: ALL_GENRES,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <GenresList
          genres={GENRES}
          onGenreClick={() => {}}
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();

});

it(`Render GenresList - active genre = Fantasy`, () => {
  const store = mockStore({
    [NameSpace.LOGIC]: {
      genre: FANTASY,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <GenresList
          genres={GENRES}
          onGenreClick={() => {}}
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();

});
