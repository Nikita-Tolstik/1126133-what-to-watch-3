import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import SmallMovieCard from './small-movie-card.jsx';
import history from '../../history.js';


const mock = {
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

it(`Render <SmallMovieCard />`, () => {

  const tree = renderer.create(
      <Router history={history}>
        <SmallMovieCard
          id={1}
          activePlayerId={-1}
          film={mock}
          onCardFilmClick={() => {}}
          onMouseIdEnter={() => {}}
          onMouseIdLeave={() => {}}
        />
      </Router>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
