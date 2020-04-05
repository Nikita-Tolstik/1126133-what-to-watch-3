import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionCreator, ActionType, Operation} from './comment.js';
import {parseComment} from '../../adapter.js';
import {noop} from '../../utils/utils.js';

const api = createAPI(noop, noop, noop);

const mockServerComments = [
  {
    id: 1,
    user: {
      name: `Peter`,
    },
    rating: 11,
    comment: `Reducer with parameters - return COMMENTS`,
    date: `May 20, 2020`,
  },
  {
    id: 2,
    user: {
      name: `Peter`,
    },
    rating: 11,
    comment: `Reducer with parameters - return COMMENTS`,
    date: `May 20, 2020`,
  },
  {
    id: 3,
    user: {
      name: `Peter`,
    },
    rating: 11,
    comment: `Reducer with parameters - return COMMENTS`,
    date: `May 20, 2020`,
  },
  {
    id: 4,
    user: {
      name: `Peter`,
    },
    rating: 11,
    comment: `Reducer with parameters - return COMMENTS`,
    date: `May 20, 2020`,
  }
];

const ReviewStatus = {
  OK: `OK`,
  PENDING: `PENDING`,
  ERROR: `ERROR`,
};

it(`Reducer without parameters - return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    reviewStatus: ReviewStatus.OK,
    comments: [],
  });
});

it(`Reducer with parameters - return reviewStatus PENDING`, () => {
  expect(reducer({
    reviewStatus: ReviewStatus.OK,
    comments: [],
  }, {
    type: ActionType.CHANGE_STATUS,
    payload: ReviewStatus.PENDING,
  })).toEqual({
    reviewStatus: ReviewStatus.PENDING,
    comments: [],
  });
});

it(`Reducer with parameters - return reviewStatus ERROR`, () => {
  expect(reducer({
    reviewStatus: ReviewStatus.PENDING,
    comments: [],
  }, {
    type: ActionType.CHANGE_STATUS,
    payload: ReviewStatus.ERROR,
  })).toEqual({
    reviewStatus: ReviewStatus.ERROR,
    comments: [],
  });
});

it(`Reducer with parameters - return COMMENTS`, () => {
  expect(reducer({
    reviewStatus: ReviewStatus.OK,
    comments: [],
  }, {
    type: ActionType.SET_COMMENTS,
    payload: mockServerComments,
  })).toEqual({
    reviewStatus: ReviewStatus.OK,
    comments: mockServerComments,
  });
});

it(`Reducer with parameters - return []`, () => {
  expect(reducer({
    reviewStatus: ReviewStatus.OK,
    comments: mockServerComments,
  }, {
    type: ActionType.SET_COMMENTS,
    payload: [],
  })).toEqual({
    reviewStatus: ReviewStatus.OK,
    comments: [],
  });
});


it(`ActionCreator.changeStatus work correctly`, () => {
  expect(ActionCreator.changeStatus(ReviewStatus.PENDING)).toEqual({
    type: ActionType.CHANGE_STATUS,
    payload: ReviewStatus.PENDING,
  });
});

it(`ActionCreator.setComments work correctly`, () => {
  expect(ActionCreator.setComments(mockServerComments)).toEqual({
    type: ActionType.SET_COMMENTS,
    payload: mockServerComments.map((it) => parseComment(it)),
  });
});

describe(`Operation.getComments work correctly`, () => {

  const parseComments = mockServerComments.map((it) => parseComment(it));

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.getComments(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, mockServerComments);

    return commentsLoader(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SET_COMMENTS,
        payload: parseComments,
      });
    });
  });
});

describe(`Operation.postReview work correctly`, () => {

  const parseComments = mockServerComments.map((it) => parseComment(it));

  const reviewData = {
    id: 1,
    rating: 8,
    comment: `Should make a correct API call to`,
  };

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postReview = Operation.postReview(reviewData, noop);

    apiMock
      .onPost(`/comments/1`)
      .reply(200, mockServerComments);

    return postReview(dispatch, noop, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_STATUS,
        payload: ReviewStatus.OK,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SET_COMMENTS,
        payload: parseComments,
      });
    });
  });
});

