import React from 'react';
import renderer from 'react-test-renderer';
import GenresList from './genres-list.jsx';


const GENRES = [
  `All genres`,
  `Fantasy`,
  `Thrillers`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Action`,
  `Animation`,
  `Comedies`,
];


it(`Render <GenresList />`, () => {

  const tree = renderer.create(
      <GenresList

        onGenreClick={() => {}}
        activeGenre={GENRES[0]}
        genresList={GENRES}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
