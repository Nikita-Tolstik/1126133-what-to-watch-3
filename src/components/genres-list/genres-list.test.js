import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';

const ALL_GENRES = `All genres`;

it(`Render <GenresList />`, () => {

  const tree = renderer.create(
      <GenresList

        onGenreClick={() => {}}
        activeGenre={ALL_GENRES}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
