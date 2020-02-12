import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {mockTitles, MockSettings} from '../../const/mock-const.js';

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
