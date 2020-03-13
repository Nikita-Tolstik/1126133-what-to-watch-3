import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);


const mocks = [
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald1`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald2`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald3`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {
    img: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg4`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Action`,
    year: 2222,
    description: [`Fantastic Beasts: The Crimes of Grindelwald`],
    rating: 5.7,
    quantityRatings: 134,
    director: `Wes Andreson`,
    starring: `Bill Murray, Edward Norton, Jude Law`,
    videoPreview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];

const ALL_GENRES = `All genres`;

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};


it(`Should movie title be pressed - e2e`, () => {
  const store = mockStore({
    genre: ALL_GENRES,
    initialFilms: mocks,
    filteredFilms: mocks,
  });

  const onCardFilmClick = jest.fn();

  const main = shallow(
      <Provider store={store}>
        <Main
          activeGenre={ALL_GENRES}
          title={MockSettings.TITLE}
          genre={MockSettings.GENRE}
          year={MockSettings.YEAR}
          initialFilms={mocks}
          onGenreClick={() => {}}
          onCardFilmClick={onCardFilmClick}
        />
      </Provider>
  );

  const links = main.find(`a.small-movie-card__link`);

  links.forEach((it) => it.props().onClick());

  expect(onCardFilmClick.mock.calls.length).toBe(links.length);

});
