import React from 'react';
import renderer from 'react-test-renderer';
import FilmsList from './films-list.jsx';

const mocks = [
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald1`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald3`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg4`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
  }
];

it(`Render <FilmsList />`, () => {

  const tree = renderer.create(
      <FilmsList

        films={mocks}
        onCardFilmClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
