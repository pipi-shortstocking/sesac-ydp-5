import React, { useState } from 'react';

export default function React_ex() {
  const [data, setData] = useState([]);

  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');

  const addInfo = () => {
    if (inputWriter.trim().length === 0 || inputTitle.trim().length === 0)
      return;

    const newInfo = data.concat({
      id: data.length + 1,
      title: inputTitle,
      writer: inputWriter,
    });
    setData(newInfo);
    setInputTitle('');
    setInputWriter('');
  };

  return (
    <div>
      <fieldset>
        <label htmlFor="name">작성자 : </label>
        <input
          id="name"
          type="text"
          placeholder="작성자"
          value={inputWriter}
          onChange={(e) => {
            setInputWriter(e.target.value);
          }}
        />

        <label htmlFor="title">제목 : </label>
        <input
          id="title"
          type="text"
          value={inputTitle}
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
        />

        <button onClick={addInfo}>작성</button>
      </fieldset>

      <select>
        <option>작성자</option>
        <option>제목</option>
        <option>번호</option>
      </select>

      <input id="search" type="text" placeholder="검색어" />
      <button>검색</button>

      <table border="1">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, idx) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.title}</td>
              <td>{data.writer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
