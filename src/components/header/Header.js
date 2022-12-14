import React from 'react';
import Button from '../ui/button/Button';
import "./header.css"

const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="header-inner">  
        <a href="/">
          <span className="title">Where in the world?</span>
        </a>
        <Button />
      </div>
    </div>
  </header>
  );
};

export default Header;