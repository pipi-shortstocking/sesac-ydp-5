import React from 'react';
import './item.css';

export default function PostItem({ post }) {
  //   console.log(post);
  const { id, title, body } = post;

  return (
    <div className="item">
      <div>
        No. {id} - {title}
      </div>
      <div>{body}</div>
    </div>
  );
}
