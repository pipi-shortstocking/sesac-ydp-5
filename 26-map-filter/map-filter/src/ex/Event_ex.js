import React, { useState } from 'react';

export default function Event_ex() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
    {
      id: 2,
      name: '윤소희',
      email: 'yoonsohee@gmail.com',
    },
  ]);

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const addInfo = () => {
    if (inputName.trim().length === 0 || inputEmail.trim().length === 0) {
      return;
    }

    const newInfo = data.concat({
      id: data.length + 1,
      name: inputName,
      email: inputEmail,
    });

    setData(newInfo);
    setInputName('');
    setInputEmail('');
  };

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.code == 'Enter') addInfo();
  };

  const deleteInfo = (targetId) => {
    const newInfo = data.filter((info) => info.id !== targetId);

    setData(newInfo);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={(e) => {
          handleKeyDown(e);
        }}
      />
      <button onClick={addInfo}>등록</button>
      {data.map((value, idx) => (
        <h2 key={value.id} onDoubleClick={() => deleteInfo(value.id)}>
          {value.name}:{value.email}
        </h2>
      ))}
    </div>
  );
}
