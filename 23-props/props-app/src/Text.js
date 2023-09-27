import React, { Component } from 'react';
import ProTypes from 'prop-types';

class Text extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

Text.defaultProps = {
  text: '이건 기본 text props입니다.',
};

Text.ProTypes = {
  text: ProTypes.string.isRequired,
};

export default Text;
