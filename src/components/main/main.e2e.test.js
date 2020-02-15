import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

Enzyme.configure({
  adapter: new Adapter(),
});

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

it(`Should movie title be pressed - e2e`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={MockSettings.TITLE}
        genre={MockSettings.GENRE}
        year={MockSettings.YEAR}
        films={mock}
        onTitleClick={onTitleClick}
      />
  );

  const links = main.find(`a.small-movie-card__link`);

  links.forEach((it) => it.props().onClick());

  expect(onTitleClick.mock.calls.length).toBe(links.length);

});
