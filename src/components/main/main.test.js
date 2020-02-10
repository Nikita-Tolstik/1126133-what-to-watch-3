import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import {mockTitles, MockSettings} from '../../const/mock-const.js';

it(`Render Main`, () => {

  const tree = renderer
    .create(<Main
      title={MockSettings.TITLE}
      genre={MockSettings.GENRE}
      year={MockSettings.YEAR}
      titles={mockTitles}
      onTitleClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
