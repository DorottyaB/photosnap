import { useState } from 'react';
import Logo from '../logo/logo.component';
import './navbar.styles.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav>
      <Logo theme='dark' />
      <div
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
        className={`mobile-nav-icon ${isNavExpanded ? 'close' : ''}`}
      >
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
      <div className={`nav-links-container ${isNavExpanded ? 'expanded' : ''}`}>
        <a href='/' className='nav-link'>
          STORIES
        </a>
        <a href='/' className='nav-link'>
          FEATURES
        </a>
        <a href='/' className='nav-link'>
          PRICING
        </a>
      </div>
      <button className={`nav-button ${isNavExpanded ? 'expanded' : ''}`}>GET AN INVITE</button>
    </nav>
  );
}