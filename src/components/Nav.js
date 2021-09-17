import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/React-API">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
