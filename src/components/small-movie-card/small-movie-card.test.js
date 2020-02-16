import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const mock = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
};

it(`Render <SmallMovieCard />`, () => {

  const tree = renderer.create(
      <SmallMovieCard

        film={mock}
        onTitleClick={() => {}}
        onMouseEnterFilm={() => {}}
        onMouseLeaveFilm={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
