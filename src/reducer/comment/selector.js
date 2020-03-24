import NameSpace from '../name-space.js';

const getReviewStatus = (state) => {
  return state[NameSpace.COMMENT].reviewStatus;
};

const getComments = (state) => {
  return state[NameSpace.COMMENT].comments;
};

export {getReviewStatus, getComments};
