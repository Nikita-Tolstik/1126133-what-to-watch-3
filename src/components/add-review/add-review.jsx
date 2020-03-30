import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import UserBlock from '../user-block/user-block.jsx';
import {Operation as CommentOperation, ActionCreator as ActionCreatorComment, ReviewStatus} from '../../reducer/comment/comment.js';
import {getReviewStatus} from '../../reducer/comment/selector.js';
import {AppRoute} from '../../const.js';

const MAX_RATING = 5;

const Length = {
  MIN: 50,
  MAX: 400,
};

const ButtonName = {
  POST: `Post`,
  SENDING: `Sending...`,
};

const StyleSettings = {
  ANIMATION: `shake 0.6s`,
  BORDER: `2px solid red`,
  TIMER: 600,
};


class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();
    this.textBlockRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this.handleErrorShow = this.handleErrorShow.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit, film} = this.props;
    const ratingToNumber = Number(this.ratingRef.current.querySelector(`input:checked`).value);

    evt.preventDefault();

    onSubmit({
      id: film.id,
      rating: ratingToNumber,
      comment: this.commentRef.current.value,
    }, this.handleErrorShow);
  }

  handleErrorShow() {
    this.textBlockRef.current.style.animation = StyleSettings.ANIMATION;
    this.textBlockRef.current.style.border = StyleSettings.BORDER;

    setTimeout(() => {
      this.textBlockRef.current.style.animation = ``;
      this.textBlockRef.current.style.border = ``;
    }, StyleSettings.TIMER);
  }

  render() {
    const {film, reviewStatus} = this.props;
    const ratings = new Array(MAX_RATING).fill(``);

    const isDisabled = reviewStatus === ReviewStatus.PENDING;
    const buttonName = reviewStatus === ReviewStatus.PENDING ? ButtonName.SENDING : ButtonName.POST;

    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: film.backgroundColor}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.backgroundImage} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.FILMS}/${film.id}`}
                    href="movie-page.html" className="breadcrumbs__link">
                    {film.title}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.posterImage} alt={film.title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form
            onSubmit={this._handleSubmit}
            action="#" className="add-review__form">

            <div className="rating">
              <div className="rating__stars" ref={this.ratingRef}>

                {ratings.map((it, i) => {
                  const rating = ++i;
                  const ratingMarkup = (
                    <React.Fragment key={rating}>
                      <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating}
                        defaultChecked
                        disabled={isDisabled}/>
                      <label className="rating__label" htmlFor={`star-${rating}`}>{`Rating ${rating}`}</label>
                    </React.Fragment>
                  );

                  return ratingMarkup;
                })}
              </div>
            </div>

            <div ref={this.textBlockRef} className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                ref={this.commentRef} required minLength={Length.MIN} maxLength={Length.MAX} disabled={isDisabled}>
              </textarea>

              <div className="add-review__submit">
                <button className="add-review__btn" type="submit" disabled={isDisabled}>{buttonName}</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
}


AddReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,

  reviewStatus: PropTypes.oneOf([
    ReviewStatus.OK, ReviewStatus.PENDING, ReviewStatus.ERROR,
  ]).isRequired,

  film: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterImage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
      backgroundImage: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      scoresCount: PropTypes.number.isRequired,
      director: PropTypes.string.isRequired,
      stars: PropTypes.array.isRequired,
      runTime: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      released: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      videoLink: PropTypes.string.isRequired,
      videoPreview: PropTypes.string.isRequired,
    }),
    PropTypes.number.isRequired
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  reviewStatus: getReviewStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(reviewData, onError) {
    dispatch(CommentOperation.postReview(reviewData, onError));
    dispatch(ActionCreatorComment.changeStatus(ReviewStatus.PENDING));
  }
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
