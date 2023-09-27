import React, { useState } from 'react';

const ColorChange = () => {
  const [msg, setMsg] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const changeRed = () => {
    setMsg('빨간색 글씨');
    setColor('red');
  };

  const changeBlue = () => {
    setMsg('파란색 글씨');
    setColor('blue');
  };
  return (
    <div>
      <h1 style={{ color: color }}>{msg}</h1>
      <button onClick={() => changeRed()}>빨간색</button>
      <button onClick={() => changeBlue()}>파란색</button>
    </div>
  );
};

export default ColorChange;
