import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import UserBlock from './user-block.jsx';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

const NO_USER_INFO = `NO_USER_INFO`;
const USER_INFO = `/wtw/static/avatar/7.jpg`;
const AuthorizationStatus = {
  NO_AUTH: `NO_AUTH`,
  AUTH: `AUTH`,
};


it(`Render UserBlock - AuthorizationStatus.NO_AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: NO_USER_INFO,
    }
  });

  const tree = renderer.create(
      <Router
        history={history}
      >
        <Provider store={store}>
          <UserBlock />
        </Provider>
      </Router>
  );

  expect(tree).toMatchSnapshot();
});


it(`Render UserBlock - AuthorizationStatus.AUTH`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.AUTH,
      userInfo: USER_INFO,
    }
  });

  const tree = renderer.create(
      <Router
        history={history}
      >
        <Provider store={store}>
          <UserBlock />
        </Provider>
      </Router>
  );

  expect(tree).toMatchSnapshot();
});
