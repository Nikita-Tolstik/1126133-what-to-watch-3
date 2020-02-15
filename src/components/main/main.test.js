import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {MockSettings} from '../../const/mock-const.js';

const mock = [
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
  },
  {
    img: `img/macbeth.jpg`,
    title: `Macbeth`,
  },
  {
    img: `img/aviator.jpg`,
    title: `Aviator`,
  },
  {
    img: `img/revenant.jpg`,
    title: `Revenant`,
  },
  {
    img: `img/johnny-english.jpg`,
    title: `Johnny English`,
  },
  {
    img: `img/snatch.jpg`,
    title: `Snatch`,
  },
  {
    img: `img/mindhunter.jpg`,
    title: `Mindhunter`,
  },
  {
    img: `img/war-of-the-worlds.jpg`,
    title: `War of the worlds`,
  },
];

it(`Render Main`, () => {

  const tree = renderer
    .create(<Main
      title={MockSettings.TITLE}
      genre={MockSettings.GENRE}
      year={MockSettings.YEAR}
      films={mock}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
