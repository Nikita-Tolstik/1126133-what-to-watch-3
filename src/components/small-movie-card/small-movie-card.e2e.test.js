import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmallMovieCard from './small-movie-card.jsx';

configure({
  adapter: new Adapter(),
});

const mock = {
  id: 1,
  title: `Fantastic Beasts: The Crimes of Grindelwald2`,
  posterImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundImage: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  backgroundColor: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  description: `Fantastic Beasts: The Crimes of Grindelwald`,
  rating: 5,
  scoresCount: 7,
  director: `Wes Andreson`,
  starring: `Bill Murray, Edward Norton, Jude Law`,
  runTime: 55,
  genre: `Action`,
  released: 44,
  isFavorite: true,
  videoLink: `https://upload.wikimedia.org/`,
  videoPreview: `https://upload.wikimedia.org/`,
};

it(`Move mouse over a card film, films information should enters the handler - e2eSmallMovieCard`, () => {
  const onMouseFilmEnter = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard

        id={1}
        activePlayerId={-1}
        film={mock}
        onCardFilmClick={() => {}}
        onMouseFilmLeave={() => {}}
        onMouseIdEnter={() => {}}
        onMouseIdLeave={() => {}}
        onMouseFilmEnter={onMouseFilmEnter}
      />);

  const article = movieCard.find(`article`);

  article.simulate(`mouseenter`);

  expect(onMouseFilmEnter).toHaveBeenCalledTimes(1);
});


it(`Click on a cards title - e2eSmallMovieCard`, () => {
  const onCardFilmClick = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard

        id={1}
        activePlayerId={-1}
        film={mock}
        onMouseFilmEnter={() => {}}
        onMouseFilmLeave={() => {}}
        onMouseIdEnter={() => {}}
        onMouseIdLeave={() => {}}
        onCardFilmClick={onCardFilmClick}
      />);

  const article = movieCard.find(`article`);
  const title = article.find(`a`);
  const formSendPrevention = jest.fn();

  title.simulate(`click`, {preventDefault: formSendPrevention});

  expect(onCardFilmClick).toHaveBeenCalledTimes(1);
});


it(`Click on a cards image - e2eSmallMovieCard`, () => {
  const onCardFilmClick = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard

        id={1}
        activePlayerId={-1}
        film={mock}
        onMouseFilmEnter={() => {}}
        onMouseFilmLeave={() => {}}
        onMouseIdEnter={() => {}}
        onMouseIdLeave={() => {}}
        onCardFilmClick={onCardFilmClick}
      />);

  const article = movieCard.find(`article`);
  const image = article.find(`div`);

  image.simulate(`click`);


  expect(onCardFilmClick).toHaveBeenCalledTimes(1);
});
