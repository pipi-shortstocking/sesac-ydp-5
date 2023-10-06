import React, { useEffect, useState } from 'react';

// 자식 컴포넌트
export default function LifeCycleFuncChild({ number }) {
  const [input, setInput] = useState('');

  // (LifeCycleFuncChild 컴포넌트의) Mount 시점 실행
  //   useEffect(() => {
  //     console.log('컴포넌트 마운트!!!');
  //   }, []);

  // Unmount 시점에 실행
  //   useEffect(() => {
  //     return () => {
  //       console.log('컴포넌트 언마운트!!!');
  //     };
  //   }, []);

  // (LifeCycleFuncChild 컴포넌트의) Mount or Update 시점에 실행
  //   useEffect(() => {
  //     console.log('컴포넌트 마운트 or 업데이트!!!');
  //   });

  // input 상태가 업데이트될 때 실행
  //   useEffect(() => {
  //     console.log('마운트 or input 상태가 변경됨에 따라 컴포넌트 업데이트');
  //   }, [input]);

  return (
    <div style={{ background: 'gold' }}>
      자식 컴포넌트
      <div>현재 Number 값은 {number}입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
