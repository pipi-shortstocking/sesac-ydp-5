import React, { Component } from 'react';

class Text extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
      </div>
    );
  }
}

Text.defaultProps = {
  text: '이건 기본 text props입니다.',
};

export default Text;
