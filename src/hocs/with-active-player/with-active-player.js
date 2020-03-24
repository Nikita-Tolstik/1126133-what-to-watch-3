import React, {PureComponent} from 'react';

const TIMER = 1000;

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = ({
        activePlayerId: -1,
      });

      this._handleMouseFilmEnter = this._handleMouseFilmEnter.bind(this);
      this._handleMouseFilmLeave = this._handleMouseFilmLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
    }

    _handleMouseFilmEnter(id) {
      this._timerId = setTimeout(() => {
        this.setState({
          activePlayerId: this.state.activePlayerId === id ? -1 : id,
        });
      }, TIMER);
    }

    _handleMouseFilmLeave() {
      this.setState({
        activePlayerId: -1,
      });

      clearTimeout(this._timerId);
    }

    render() {
      return (
        <Component
          {...this.props}
          activePlayerId={this.state.activePlayerId}
          onMouseIdEnter={this._handleMouseFilmEnter}
          onMouseIdLeave={this._handleMouseFilmLeave}
        />
      );
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
