import React, { Component } from 'react'
import Counter from '../components/Counter'

class CounterPageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countValue: 0,
      typeNumber: 'Even',
    };
  };

  checkNumberType = () => {
    if (this.state.countValue % 2 === 0) {
      this.setState({
        typeNumber: 'Even'
      });
    } else {
      this.setState({
        typeNumber: 'Odd'
      });
    };
  };

  handleIncrement = () => {
    this.setState({ countValue: this.state.countValue + 1 },
      () => this.checkNumberType());
  };

  handleDecrement = () => {
    if (this.state.countValue > 0) {
      this.setState({ countValue: this.state.countValue - 1 },
        () => this.checkNumberType());
    }
  };

  handleReset = () => {
    this.setState((state) => {
      return { countValue: 0 }
    },
      () => this.checkNumberType());
  };

  render() {
    return (
      <div>
        <Counter countValue={this.state.countValue} typeNumber={this.state.typeNumber} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} handleReset={this.handleReset} />
      </div>
    );
  };
}

export default CounterPageContainer;