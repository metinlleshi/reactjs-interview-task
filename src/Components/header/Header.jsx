import React from 'react';
import { CgClose } from 'react-icons/cg';

import './Header.css';

function Header() {
  return (
    <header>
        <span>Your Notes</span>
        <CgClose size={26} onClick={() => window.close()}/>
    </header>
  );
}

export default Header;
