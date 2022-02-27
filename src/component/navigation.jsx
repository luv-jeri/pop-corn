import './navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';

export default function navigation() {
  return (
    <nav className='nav-wrapper flex j-sb a-c'>
      <div>
        <img 
          className='logo'
          src={logo}
          alt='LOGO'
          height={44}
          // width={50}
        />
      </div>
      <div className='link-wrapper flex f-1 '>
        <Link className="links" to='/login'>Login</Link>
        <Link  className="links" to='/signup'>Signup</Link>
      </div>
    </nav>
  );
}
