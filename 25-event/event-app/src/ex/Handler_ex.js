import React, { Component } from 'react';

class Handler_ex extends Component {
  state = {
    msg: 'Hello World!',
  };

  show = () => {
    this.setState({
      msg: 'Goodbye World!',
    });
  };

  render() {
    const { msg } = this.state;
    return (
      <div>
        <h1>{msg}</h1>
        <button onClick={this.show}>클릭</button>
      </div>
    );
  }
}

export default Handler_ex;
