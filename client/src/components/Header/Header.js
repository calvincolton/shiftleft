import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-interior">
        <h1>ShiftLeft Books</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;