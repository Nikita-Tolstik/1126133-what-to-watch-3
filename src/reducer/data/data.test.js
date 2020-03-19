import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from './data.js';
import {parseFilm} from '../../adapter.js';

const api = createAPI(() => {});

const films = [
  {
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
];


const mockServer = [{
  'id': 1,
  'name': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'poster_image': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'preview_image': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'background_image': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'background_color': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'description': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'rating': 3,
  'scores_count': 6,
  'director': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'starring': [`Bill Murray, Edward Norton, Jude Law`],
  'run_time': 66,
  'genre': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'released': 55,
  'is_favorite': true,
  'video_link': `Fantastic Beasts: The Crimes of Grindelwald2`,
  'preview_video_link': `Fantastic Beasts: The Crimes of Grindelwald2`
}];

const parsedMock = parseFilm(mockServer[0]);

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    films: [],
  });
});

it(`Reducer should update questions by load films`, () => {
  expect(reducer({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films,
  })).toEqual({
    films,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /questions`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, mockServer);

    return filmsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FILMS,
        payload: [parsedMock],
      });
    });
  });
});
