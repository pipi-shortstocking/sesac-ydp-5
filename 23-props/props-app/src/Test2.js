import React, { Component } from 'react';
import photo from '../src/mike.jpeg';

class Class_Test2 extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20',
  };

  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        <img src={photo} />
      </div>
    );
  }
}

export default Class_Test2;
