import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../logo/logo.component';
import './navbar.styles.css';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div>
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
          <Link
            to='stories'
            className='nav-link'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            STORIES
          </Link>
          <Link
            to='features'
            className='nav-link'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            FEATURES
          </Link>
          <Link
            to='pricing'
            className='nav-link'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            PRICING
          </Link>
        </div>
        <button className={`nav-button ${isNavExpanded ? 'expanded' : ''}`}>GET AN INVITE</button>
      </nav>
      <Outlet />
    </div>
  );
}
