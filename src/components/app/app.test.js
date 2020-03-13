import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from "redux-mock-store";
import App from './app.jsx';

const mockStore = configureStore([]);

const MockSettings = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014
};

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

it(`Render <App />`, () => {
  const store = mockStore({
    genre: ALL_GENRES,
    initialFilms: mocks,
    filteredFilms: mocks,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            title={MockSettings.TITLE}
            genre={MockSettings.GENRE}
            year={MockSettings.YEAR}
            selectFilm={0}
            onCardFilmClick={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
