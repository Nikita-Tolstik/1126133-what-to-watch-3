import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenresList from './genres-list.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const ALL_GENRES = `All genres`;

it(`Should be click on genres-list - e2e`, () => {
  const onGenreClick = jest.fn();
  const refPrevention = jest.fn();

  const genresList = shallow(
      <GenresList
        activeGenre={ALL_GENRES}
        onGenreClick={onGenreClick}
      />
  );

  const list = genresList.find(`ul`);
  list.simulate(`click`, {
    preventDefault: refPrevention,
    target: {
      tagName: `A`,
      textContent: ``,
    }
  });

  expect(onGenreClick).toHaveBeenCalledTimes(1);
});
