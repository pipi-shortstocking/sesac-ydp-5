import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="Header">
      <span>Router Tutorial</span>
      <div>
        <Link to="/" className="Menu">
          Home
        </Link>
        <Link to="/products" className="Menu">
          Product
        </Link>
        <Link to="/photos" className="Menu">
          Photo
        </Link>
      </div>
    </header>
  );
}
