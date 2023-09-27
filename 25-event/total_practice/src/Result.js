import React from 'react';

function Result(props) {
  const { img, text, backgroundColor, textColor } = props;

  return (
    <div style={{ display: 'block' }}>
      <img src={img} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Result;
