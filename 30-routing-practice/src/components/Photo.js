import React from 'react';

export default function Photo({ photo }) {
  // console.log(photo); // { albumId, id, title, url, thumbnailurl }

  return (
    <div>
      <ul>
        <li className="PhotoTitle">사진 제목: {photo.title}</li>
        <img src={photo.url} className="Photo" />
      </ul>
    </div>
  );
}
