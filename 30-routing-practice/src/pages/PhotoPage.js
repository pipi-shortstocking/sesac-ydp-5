import React, { useState } from 'react';
import PhotoList from '../components/PhotoList';

export default function PhotoPage() {
  return (
    <div className="PhotoList">
      <div>여기는 사진 목록</div>
      <PhotoList />
    </div>
  );
}
