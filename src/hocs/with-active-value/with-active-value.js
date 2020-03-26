import React, {PureComponent} from 'react';

const NO_ACTIVE_VALUE = -1;

const withActiveValue = (Component, initialState = NO_ACTIVE_VALUE) => {
  class WithActiveValue extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        value: initialState,
      };

      this._handleElementClick = this._handleElementClick.bind(this);
    }

    _handleElementClick(activeValue) {
      this.setState({
        value: activeValue,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          activeValue={this.state.value}
          onElementClick={this._handleElementClick}
        />
      );
    }
  }

  return WithActiveValue;
};

export default withActiveValue;
