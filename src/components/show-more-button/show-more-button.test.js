import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button.jsx';

it(`Render ShowMoreButton - isShowMoreButton = true`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        isShowMoreButton={true}
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render ShowMoreButton - isShowMoreButton = false`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        isShowMoreButton={false}
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
