import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

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

it(`Render <App />`, () => {

  const tree = renderer
    .create(<App

      title={MockSettings.TITLE}
      genre={MockSettings.GENRE}
      year={MockSettings.YEAR}
      films={mocks}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
