import React, {PureComponent} from 'react';

const NO_ACTIVE_VALUE = 0;

const withActiveValue = (Component, initialState = NO_ACTIVE_VALUE) => {
  class WithActiveValue extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        value: initialState,
      };

      this.handleElementClick = this.handleElementClick.bind(this);
    }

    handleElementClick(activeValue) {
      this.setState({
        value: activeValue,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          activeValue={this.state.value}
          onElementClick={this.handleElementClick}
        />
      );
    }
  }

  return WithActiveValue;
};

export default withActiveValue;
