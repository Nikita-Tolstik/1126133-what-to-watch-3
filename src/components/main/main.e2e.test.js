import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {mockTitles, MockSettings} from '../../const/mock-const.js';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should movie title be pressed`, () => {

  const handleTitleClick = jest.fn();

  const main = shallow(
      <Main
        title={MockSettings.TITLE}
        genre={MockSettings.GENRE}
        year={MockSettings.YEAR}
        titles={mockTitles}
        onTitleClick={handleTitleClick}
      />
  );

  const links = main.find(`a.small-movie-card__link`);

  links.forEach((it) => it.props().onClick());

  expect(handleTitleClick.mock.calls.length).toBe(links.length);

});
