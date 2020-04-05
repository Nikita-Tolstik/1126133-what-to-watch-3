import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';
import VideoScreen from './video-screen.jsx';
import history from '../../history.js';

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
  genre: `Thriller`,
  released: 44,
  isFavorite: true,
  videoLink: `https://upload.wikimedia.org/`,
  videoPreview: `https://upload.wikimedia.org/`,
};

const Setting = {
  currentTime: 150,
  duration: 800,
};

it(`Render VideoScreen - isPlaying = true`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: false,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <VideoScreen
            film={mockFilm}
            currentTime={Setting.currentTime}
            duration={Setting.duration}
            isPlaying={true}
            onFullScreenClick={() => {}}
            onPlayButtonClick={() => {}}
          >
            {children}
          </VideoScreen>
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

it(`Render VideoScreen - isPlaying = false`, () => {

  const store = mockStore({
    [NameSpace.DATA]: {
      isError: true,
    }
  });

  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <VideoScreen
            film={mockFilm}
            currentTime={Setting.currentTime}
            duration={Setting.duration}
            isPlaying={false}
            onFullScreenClick={() => {}}
            onPlayButtonClick={() => {}}
          >
            {children}
          </VideoScreen>
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();

});
