import {reducer, ActionType, ActionCreator} from './reducer.js';


const Genre = {
  All: `All genres`,
  COMEDY: `Comedies`,
  THRILLER: `Thriller`,
};

const mock = [
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

const mock1 = [
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
  }
];

it(`Reducer without additional parameters should return initial state`, () => {

  expect(reducer(void 0, {})).toHaveProperty(`genre`, Genre.All);
  expect(reducer(void 0, {})).toHaveProperty(`filteredFilms`);
});


it(`Reducer should change genre`, () => {
  const {films} = mock;

  expect(reducer({
    genre: Genre.All,
    filteredFilms: films,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genre.COMEDY,
  }
  )).toEqual({
    genre: Genre.COMEDY,
    filteredFilms: films,
  });

  expect(reducer({
    genre: Genre.All,
    filteredFilms: films,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: Genre.THRILLER,
  }
  )).toEqual({
    genre: Genre.THRILLER,
    filteredFilms: films,
  });

});

it(`Reducer should get filtered films`, () => {
  const {films} = mock;
  const {films1} = mock1;

  expect(reducer({
    genre: Genre.All,
    filteredFilms: films,
  }, {
    type: ActionType.GET_FILTERED_FILMS,
    payload: films1,
  }
  )).toEqual({
    genre: Genre.All,
    filteredFilms: films1,
  });

});

it(`Action creators work correctly`, () => {

  expect(ActionCreator.changeGenre(Genre.COMEDY)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: Genre.COMEDY,
  });

  expect(ActionCreator.getFilteredFilms(Genre.All)).toHaveProperty(`type`, ActionType.GET_FILTERED_FILMS);
  expect(ActionCreator.getFilteredFilms(Genre.All)).toHaveProperty(`payload`);
});
