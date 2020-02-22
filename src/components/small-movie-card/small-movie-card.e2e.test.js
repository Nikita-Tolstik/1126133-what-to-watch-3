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
  videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Move mouse over a card film, films information should enters the handler - e2eSmallMovieCard`, () => {
  const onMouseFilmEnter = jest.fn();

  const movieCard = shallow(
      <SmallMovieCard

        isPlaying={true}
        film={mock}
        onCardFilmClick={() => {}}
        onMouseFilmLeave={() => {}}
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

        isPlaying={true}
        film={mock}
        onCardFilmClick={onCardFilmClick}
        onMouseFilmLeave={() => {}}
        onMouseFilmEnter={() => {}}
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

        isPlaying={true}
        film={mock}
        onCardFilmClick={onCardFilmClick}
        onMouseFilmLeave={() => {}}
        onMouseFilmEnter={() => {}}
      />);

  const article = movieCard.find(`article`);
  const image = article.find(`div`);

  image.simulate(`click`);


  expect(onCardFilmClick).toHaveBeenCalledTimes(1);
});
