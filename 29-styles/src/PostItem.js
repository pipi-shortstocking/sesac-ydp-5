import React from 'react';
import './styles/list.scss';

export default function PostItem({ post }) {
  //   console.log(post);
  const { id, title, body } = post;

  return (
    <div className="item">
      <div className="item-content">
        <div>
          <span className="num">
            No. {id} - {title}
          </span>
        </div>
        <div className="content">{body}</div>
      </div>
    </div>
  );
}
