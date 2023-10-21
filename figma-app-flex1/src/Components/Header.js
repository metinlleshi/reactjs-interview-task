import React from 'react';
import Path6864 from './images/Path6864.svg';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <h3 className="app-title">
        Your Notes
        <img src={Path6864} alt="close" className="crossign" />
      </h3>
    </header>
  );
}

export default Header;
