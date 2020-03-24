import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getStatus} from '../../reducer/user/selectors.js';
import {ActionCreator, Status} from '../../reducer/user/user.js';


class SingIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {responseStatus, onStatusReset} = this.props;
    let errorClass;
    let markUpError;

    if (responseStatus === Status.BAD_REQUEST) {
      errorClass = `sign-in__field--error`;

      markUpError = (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action=""
            className="sign-in__form"
            onSubmit={this.handleSubmit}
          >

            {markUpError}
            <div className="sign-in__fields">
              <div className={`sign-in__field ${errorClass}`}>
                <input
                  onChange={() => onStatusReset(Status.RESET)}
                  className="sign-in__input" type="email" placeholder="Email address" required name="user-email" id="user-email"
                  ref={this.emailRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" autoComplete="off" placeholder="Password" required name="user-password" id="user-password"
                  ref={this.passwordRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SingIn.propTypes = {
  responseStatus: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onStatusReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  responseStatus: getStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onStatusReset(status) {
    dispatch(ActionCreator.putStatus(status));
  }
});


export {SingIn};
export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
