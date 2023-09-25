import React, { Component } from 'react';

class Class_Test extends Component {
  name = '김정윤';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  render() {
    return <div style={this.my_style}>{this.name}</div>;
  }
}

export default Class_Test;
