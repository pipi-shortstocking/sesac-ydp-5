import React, { useEffect, useState } from 'react';
import Photo from './Photo';
import axios from 'axios';

export default function PhotoList() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos'
      );

      setPhotoData(res.data.slice(0, 10));
    };
  });

  return (
    <div>
      <Photo />
    </div>
  );
}
