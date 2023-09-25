import React from 'react';
import './App.css';
import photo from '../src/img.jpeg';

export default function Book({ title, author, price, type }) {
  return (
    <div className="whole">
      <div className="bestSeller">이번주 베스트셀러</div>
      <img src={photo} className="book"></img>
      <h3 className="title">{title}</h3>
      <div className="info">저자: {author}</div>
      <div className="info">판매가: {price}</div>
      <div className="info">구분: {type}</div>
    </div>
  );
}
