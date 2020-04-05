import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import AddReview from './add-review.jsx';
import history from '../../history.js';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';
import {AppRoute} from '../../const.js';


const mockStore = configureStore([]);

const children = <div className="children-component" />;

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

const ReviewStatus = {
  OK: `OK`,
  PENDING: `PENDING`,
  ERROR: `ERROR`,
};

it(`Render AddReview - ReviewStatus OK`, () => {
  history.push(`${AppRoute.FILMS}/${mockFilm.id}${AppRoute.REVIEW}`);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.OK,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <AddReview
            film={mockFilm}
          >
            {children}
          </AddReview>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

it(`Render AddReview - ReviewStatus PENDING`, () => {
  history.push(`${AppRoute.FILMS}/${mockFilm.id}${AppRoute.REVIEW}`);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.PENDING,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <AddReview
            film={mockFilm}
          >
            {children}
          </AddReview>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

it(`Render AddReview - ReviewStatus ERROR`, () => {
  history.push(`${AppRoute.FILMS}/${mockFilm.id}${AppRoute.REVIEW}`);

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: `AUTH`,
      userInfo: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxx`,
    },
    [NameSpace.COMMENT]: {
      reviewStatus: ReviewStatus.ERROR,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <AddReview
            film={mockFilm}
          >
            {children}
          </AddReview>
        </Provider>
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();

});
