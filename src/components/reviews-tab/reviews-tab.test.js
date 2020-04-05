import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsTab from './reviews-tab.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

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

it(`Render ReviewsTab - with comments`, () => {
  const store = mockStore({
    [NameSpace.COMMENT]: {
      comments: mockComments,
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsTab />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});


it(`Render ReviewsTab - without comments`, () => {
  const store = mockStore({
    [NameSpace.COMMENT]: {
      comments: [],
    }
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ReviewsTab />
      </Provider>
  );

  expect(tree).toMatchSnapshot();
});

