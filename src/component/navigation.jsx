import './navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';
import Cookie from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import PopButton from './pop_button/PopButton';
import { IsLogContext } from '../context/isLog';

export default function Navigation() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] =
    useContext(IsLogContext);

  useEffect(() => {
    if (Cookie.get('token')) {
      setIsLoggedIn(true);
    }
  }, []);

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
        {!isLoggedIn ? (
          <>
            <Link className='links' to='/login'>
              Login
            </Link>
            <Link className='links' to='/signup'>
              Signup
            </Link>{' '}
          </>
        ) : (
          <PopButton
            value='Logout'
            onTap={() => {
              Cookie.remove('token');
              setIsLoggedIn(false);
              navigate('/login');
            }}
            type='s'
          />
        )}
      </div>
    </nav>
  );
}
