import React from 'react';

const food = (props) => {
  return (
    <div>
      좋아하는 음식은 <div style={{ color: 'red' }}>{props.name}</div>
    </div>
  );
};

food.defaultProps = {
  name: '파스타',
};

export default food;
