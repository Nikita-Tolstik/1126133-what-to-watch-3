import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import SingIn from './sign-in.jsx';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';
import {AppRoute} from '../../const.js';

const mockStore = configureStore([]);

const Status = {
  BAD_REQUEST: 400,
  OK: 0,
  PENDING: `PENDING`,
};

const children = <div className="children-component" />;


it(`Render SingIn - Status OK`, () => {
  history.push(AppRoute.LOGIN);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      responseStatus: Status.OK,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <SingIn
          >
            {children}
          </SingIn>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

it(`Render SingIn - Status BAD_REQUEST`, () => {
  history.push(AppRoute.LOGIN);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      responseStatus: Status.BAD_REQUEST,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <SingIn
          >
            {children}
          </SingIn>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();


  expect(tree).toMatchSnapshot();

});

it(`Render SingIn - AuthorizationStatus PENDING`, () => {
  history.push(AppRoute.LOGIN);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: true,
    },
    [NameSpace.USER]: {
      authorizationStatus: `PENDING`,
      responseStatus: Status.OK,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <SingIn
          >
            {children}
          </SingIn>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();


  expect(tree).toMatchSnapshot();

});
