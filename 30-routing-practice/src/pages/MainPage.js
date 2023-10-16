import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); // Dark or null

  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <div>여기는 홈!</div>
      <button
        onClick={() => {
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </div>
  );
}
