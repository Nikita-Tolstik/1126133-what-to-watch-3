import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

configure({
  adapter: new Adapter(),
});

const mock = {
  img: `picture`,
  title: `name`,
};

it(`Move mouse over a card film, films information should enters the handler - e2eSmallMovieCard`, () => {
  const onMouseEnterFilm = jest.fn((...args) => [...args]);

  const movieCard = shallow(
      <SmallMovieCard

        film={mock}
        onTitleClick={() => {}}
        onMouseLeaveFilm={() => {}}
        onMouseEnterFilm={onMouseEnterFilm}
      />);

  const article = movieCard.find(`article`);

  article.simulate(`mouseenter`);

  expect(onMouseEnterFilm).toHaveBeenCalledTimes(1);

  expect(onMouseEnterFilm.mock.calls[0][0]).toMatchObject(mock);
});
