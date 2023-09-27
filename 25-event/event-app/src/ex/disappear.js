import React, { useState } from 'react';

const Disappear = () => {
  const [msg, setMsg] = useState('안녕하세요');
  const [text, setText] = useState('사라져라');

  const show = () => {
    if (text == '사라져라') {
      setMsg('');
      setText('나타나라');
    } else {
      setMsg('안녕하세요');
      setText('사라져라');
    }
  };

  return (
    <div>
      <button onClick={show}>{text}</button>
      <h1>{msg}</h1>
    </div>
  );
};

export default Disappear;
