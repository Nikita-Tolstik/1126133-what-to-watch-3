import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import {Logo} from './logo.jsx';
import history from '../../history.js';


it(`Render Logo - isHeader = true`, () => {

  const tree = renderer.create(
      <Router
        history={history}>
        <Logo
          isHeader={true}
          onGenreReset={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Logo - isHeader = false`, () => {

  const tree = renderer.create(
      <Router
        history={history}>
        <Logo
          isHeader={false}
          onGenreReset={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
