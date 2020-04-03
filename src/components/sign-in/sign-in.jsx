import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Logo from '../logo/logo.jsx';
import {getStatus} from '../../reducer/user/selectors.js';
import {Operation as UserOperation, ActionCreator, Status, AuthorizationStatus} from '../../reducer/user/user.js';
import {getAuthorizationStatus} from '../../reducer/user/selectors.js';


const StyleSettings = {
  ANIMATION: `shake 0.6s`,
  BORDER: `2px solid red`,
  TIMER: 600,
};

const ButtonName = {
  SING_IN: `Sign in`,
  PROCESSING: `Sign in...`,
};


class SingIn extends PureComponent {
  constructor(props) {
    super(props);

    this.emailRef = createRef();
    this.passwordRef = createRef();
    this.signInBlockRef = createRef();

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleError = this._handleError.bind(this);
  }

  componentDidMount() {
    const {responseStatus, onStatusReset} = this.props;
    if (responseStatus === Status.BAD_REQUEST && this.emailRef.current.value.length === 0) {
      onStatusReset(Status.RESET);
    }
  }


  componentDidUpdate() {
    const {responseStatus, onStatusReset} = this.props;
    if (responseStatus === Status.BAD_REQUEST && this.emailRef.current.value.length === 0) {
      onStatusReset(Status.RESET);
    }
  }

  _handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      email: this.emailRef.current.value,
      password: this.passwordRef.current.value,
    }, this._handleError);
  }


  _handleError() {
    this.signInBlockRef.current.style.animation = StyleSettings.ANIMATION;
    this.emailRef.current.style.border = StyleSettings.BORDER;
    this.passwordRef.current.style.border = StyleSettings.BORDER;

    setTimeout(() => {
      this.signInBlockRef.current.style.animation = ``;
      this.emailRef.current.style.border = ``;
      this.passwordRef.current.style.border = ``;
    }, StyleSettings.TIMER);
  }

  render() {
    const {responseStatus, onStatusReset, authorizationStatus} = this.props;
    const buttonName = authorizationStatus === AuthorizationStatus.PENDING ? ButtonName.PROCESSING : ButtonName.SING_IN;
    const isDisabled = authorizationStatus === AuthorizationStatus.PENDING;
    let markUpError;


    if (responseStatus === Status.BAD_REQUEST) {
      markUpError = (
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      );
    }

    return (
      <div className="user-page">
        <header className="page-header user-page__head">

          <Logo
            isHeader={true}
          />

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action=""
            className="sign-in__form"
            onSubmit={this._handleSubmit}
          >

            {markUpError}
            <div ref={this.signInBlockRef} className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  onChange={() => onStatusReset(Status.RESET)}
                  ref={this.emailRef} disabled={isDisabled}
                  className="sign-in__input" type="email" placeholder="Email address" required name="user-email" id="user-email"
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" autoComplete="off" placeholder="Password" required name="user-password" id="user-password"
                  ref={this.passwordRef} disabled={isDisabled}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit" disabled={isDisabled}>{buttonName}</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">

          <Logo
            isHeader={false}
          />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SingIn.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  responseStatus: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onStatusReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  responseStatus: getStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData, onError) {
    dispatch(UserOperation.login(authData, onError));
    dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.PENDING));
  },
  onStatusReset(status) {
    dispatch(ActionCreator.putStatus(status));
  }
});


export {SingIn};
export default connect(mapStateToProps, mapDispatchToProps)(SingIn);
