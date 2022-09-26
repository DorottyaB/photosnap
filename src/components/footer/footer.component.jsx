import { Link } from 'react-router-dom';

import Logo from '../logo/logo.component';
import Button from '../button/button.component';

// Icons downloaded from https://ionic.io/ionicons
import facebookIcon from '../../assets/shared/facebook.svg';
import youtubeIcon from '../../assets/shared/youtube.svg';
import twitterIcon from '../../assets/shared/twitter.svg';
import pinterestIcon from '../../assets/shared/pinterest.svg';
import instagramIcon from '../../assets/shared/instagram.svg';

import './footer.styles.css';

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <Logo theme='light' />
        <div className='social-links'>
          <a href='https://facebook.com'>
            <img src={facebookIcon} alt='Facebook icon' />
          </a>
          <a href='https://youtube.com'>
            <img src={youtubeIcon} alt='Youtube icon' />
          </a>
          <a href='https://twitter.com'>
            <img src={twitterIcon} alt='Twitter icon' />
          </a>
          <a href='https://pinterest.com'>
            <img src={pinterestIcon} alt='Pinterest icon' />
          </a>
          <a href='https://instagram.com'>
            <img src={instagramIcon} alt='Instagram icon' />
          </a>
        </div>
      </div>
      <div className='container footer-nav-links'>
        <Link to='/' className='footer-nav-link'>
          HOME
        </Link>
        <Link to='/stories' className='footer-nav-link'>
          STORIES
        </Link>
        <Link to='/features' className='footer-nav-link'>
          FEATURES
        </Link>
        <Link to='/pricing' className='footer-nav-link'>
          PRICING
        </Link>
      </div>
      <div className='container'>
        <Button buttonText='Get an invite' theme='dark' buttonType='default' />
        <p className='copyright-text'>Copyright 2022. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
