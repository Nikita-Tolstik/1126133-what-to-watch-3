import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getComments} from '../../reducer/comment/selector.js';
import {parseDate, TypeFilter, filterElement} from '../../utils/utils.js';

const getMarkupReview = (comments) => {
  const markUpReview = comments.map((it) => {
    const date = parseDate(it.date);

    const markUp = (
      <div key={it.id} className="review">
        <blockquote className="review__quote">
          <p className="review__text">{it.comment}</p>

          <footer className="review__details">
            <cite className="review__author">{it.userName}</cite>
            <time className="review__date" dateTime="2016-12-24">{date}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{it.rating}</div>
      </div>
    );

    return markUp;
  });

  return markUpReview;
};


const ReviewsTab = ({comments}) => {
  const commentsFirstColumn = filterElement(comments, TypeFilter.ODD);
  const commentsSecondColumn = filterElement(comments, TypeFilter.EVEN);

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {getMarkupReview(commentsFirstColumn)}
        </div>

        <div className="movie-card__reviews-col">
          {getMarkupReview(commentsSecondColumn)}
        </div>
      </div>
    </React.Fragment>
  );
};

ReviewsTab.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});


export {ReviewsTab};
export default connect(mapStateToProps)(ReviewsTab);
