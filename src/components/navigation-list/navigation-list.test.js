import React from 'react';
import renderer from 'react-test-renderer';
import NavigationList from './navigation-list.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

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
  genre: `Action`,
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

const TabType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

it(`Render NavigationList - active Tab = OVERVIEW`, () => {
  const tree = renderer.create(
      <NavigationList

        film={mockFilm}
        activeValue={TabType.OVERVIEW}
        onElementClick={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});

it(`Render NavigationList - active Tab = DETAILS`, () => {
  const tree = renderer.create(
      <NavigationList

        film={mockFilm}
        activeValue={TabType.DETAILS}
        onElementClick={() => {}}
      />
  );

  expect(tree).toMatchSnapshot();
});

it(`Render NavigationList - active Tab = REVIEWS with comments`, () => {
  const store = mockStore({
    [NameSpace.COMMENT]: {
      comments: mockComments,
    }
  });

  const tree = renderer.create(

      <Provider store={store}>
        <NavigationList

          film={mockFilm}
          activeValue={TabType.REVIEWS}
          onElementClick={() => {}}
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});

it(`Render NavigationList - active Tab = REVIEWS without comments`, () => {
  const store = mockStore({
    [NameSpace.COMMENT]: {
      comments: [],
    }
  });

  const tree = renderer.create(

      <Provider store={store}>
        <NavigationList

          film={mockFilm}
          activeValue={TabType.REVIEWS}
          onElementClick={() => {}}
        />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});
