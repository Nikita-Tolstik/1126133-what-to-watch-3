import React from 'react';
import renderer from 'react-test-renderer';
import ErrorMessage from './error-message.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

it(`Render ErrorMessage - without error`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});

it(`Render ErrorMessage - with error`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: true
    },
  });

  const tree = renderer.create(
      <Provider store={store}>
        <ErrorMessage />
      </Provider>
  ).toJSON();


  expect(tree).toMatchSnapshot();
});
