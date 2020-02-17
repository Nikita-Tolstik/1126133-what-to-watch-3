import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

configure({
  adapter: new Adapter(),
});

const mock = {
  img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `Action`,
  year: 2222,
  description: [`Fantastic Beasts: The Crimes of Grindelwald`],
  rating: 5.7,
  quantityRatings: 134,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law`,
};

it(`Move mouse over a card film, films information should enters the handler - e2eSmallMovieCard`, () => {
  const onMouseFilmEnter = jest.fn((...args) => [...args]);

  const movieCard = shallow(
      <SmallMovieCard

        film={mock}
        onCardFilmClick={() => {}}
        onMouseFilmLeave={() => {}}
        onMouseFilmEnter={onMouseFilmEnter}
      />);

  const article = movieCard.find(`article`);

  article.simulate(`mouseenter`);

  expect(onMouseFilmEnter).toHaveBeenCalledTimes(1);

  expect(onMouseFilmEnter.mock.calls[0][0]).toMatchObject(mock);
});
