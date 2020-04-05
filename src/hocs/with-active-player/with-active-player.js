import React, {PureComponent} from 'react';

const TIMER = 1000;
const NO_ACTIVE = -1;

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayerId: NO_ACTIVE,
      };

      this.handleMouseFilmEnter = this.handleMouseFilmEnter.bind(this);
      this.handleMouseFilmLeave = this.handleMouseFilmLeave.bind(this);
    }

    componentWillUnmount() {
      clearTimeout(this._timerId);
    }

    handleMouseFilmEnter(id) {
      this._timerId = setTimeout(() => {
        this.setState({
          activePlayerId: this.state.activePlayerId === id ? NO_ACTIVE : id,
        });
      }, TIMER);
    }

    handleMouseFilmLeave() {
      this.setState({
        activePlayerId: NO_ACTIVE,
      });

      clearTimeout(this._timerId);
    }

    render() {
      return (
        <Component
          {...this.props}
          activePlayerId={this.state.activePlayerId}
          onMouseIdEnter={this.handleMouseFilmEnter}
          onMouseIdLeave={this.handleMouseFilmLeave}
        />
      );
    }
  }

  return WithActivePlayer;
};

export default withActivePlayer;
