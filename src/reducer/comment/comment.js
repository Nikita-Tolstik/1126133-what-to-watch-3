import {extend} from '../../utils/utils.js';
import {ActionCreator as ActionCreatorScreen, ScreenType} from '../screen-type/screen-type.js';
import {parseComment} from '../../adapter.js';

const ReviewStatus = {
  OK: `OK`,
  PENDING: `PENDING`,
  ERROR: `ERROR`,
};

const initialState = {
  reviewStatus: ReviewStatus.OK,
  comments: [],
};

const ActionType = {
  CHANGE_STATUS: `CHANGE_STATUS`,
  SET_COMMENTS: `SET_COMMENTS`,
};

const ActionCreator = {
  changeStatus: (reviewStatus) => {
    return {
      type: ActionType.CHANGE_STATUS,
      payload: reviewStatus,
    };
  },

  setComments: (comments) => {
    const parsedComment = comments.map((it) => parseComment(it));

    return {
      type: ActionType.SET_COMMENTS,
      payload: parsedComment,
    };
  }
};

const Operation = {
  postReview: (reviewData, onError) => (dispatch, _getState, api) => {
    return api.post(`/comments/${reviewData.id}`, {
      rating: reviewData.rating,
      comment: reviewData.comment,
    })
    .then((response) => {
      dispatch(ActionCreator.changeStatus(ReviewStatus.OK));
      dispatch(ActionCreator.setComments(response.data));
      dispatch(ActionCreatorScreen.changeScreen(ScreenType.MOVIE));
    })
    .catch(() => {
      dispatch(ActionCreator.changeStatus(ReviewStatus.ERROR));
      onError();
    });
  },

  getComments: (id) => (dispatch, _getState, api) => {
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(ActionCreator.setComments(response.data));
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATUS:
      return extend(state, {
        reviewStatus: action.payload,
      });

    case ActionType.SET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {Operation, ActionType, ActionCreator, ReviewStatus, reducer};
