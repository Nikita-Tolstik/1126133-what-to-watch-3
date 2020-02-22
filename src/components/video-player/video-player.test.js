import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

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


it(`Render <VideoPlayer />`, () => {

  const tree = renderer.create(
      <VideoPlayer

        isPlaying={true}
        img={mock.img}
        videoPreview={mock.videoPreview}
      />, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
