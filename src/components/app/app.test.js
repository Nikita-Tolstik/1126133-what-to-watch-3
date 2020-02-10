import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

const mockTitles = [

  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`
];

it(`Render App`, () => {

  const tree = renderer
    .create(<App

      title={MockSettings.TITLE}
      genre={MockSettings.GENRE}
      year={MockSettings.YEAR}
      titles={mockTitles}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
