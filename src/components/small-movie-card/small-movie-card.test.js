import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const mock = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Action`,
  year: 2222,
  description: [`Fantastic Beasts: The Crimes of Grindelwald`],
  rating: 5.7,
  quantityRatings: 134,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law`,
};

it(`Render <SmallMovieCard />`, () => {

  const tree = renderer.create(
      <SmallMovieCard

        film={mock}
        onCardFilmClick={() => {}}
        onMouseFilmEnter={() => {}}
        onMouseFilmLeave={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
