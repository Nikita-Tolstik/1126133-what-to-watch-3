import {extend} from '../../utils/utils.js';
import {ActionCreator as ActionCreatorScreen, ScreenType} from '../screen-type/screen-type.js';

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
  GET_COMMENTS: `GET_COMMENTS`,
};

const ActionCreator = {
  changeStatus: (reviewStatus) => {
    return {
      type: ActionType.CHANGE_STATUS,
      payload: reviewStatus,
    };
  },

  getComments: (comments) => {
    return {
      type: ActionType.GET_COMMENTS,
      payload: comments,
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
      dispatch(ActionCreator.getComments(response.data));
      dispatch(ActionCreatorScreen.changeScreen(ScreenType.MOVIE));
    })
    .catch(() => {
      dispatch(ActionCreator.changeStatus(ReviewStatus.ERROR));
      onError();
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_STATUS:
      return extend(state, {
        reviewStatus: action.payload,
      });

    case ActionType.GET_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export {Operation, ActionType, ActionCreator, ReviewStatus, reducer};
