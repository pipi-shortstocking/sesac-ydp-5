import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/">홈으로 이동하기</Link>
      {/* <a href="http://localhost:3000">홈으로 이동하기</a> */}
    </div>
  );
}
