/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './styles/login.css';
import '../styles/index.css';
import '../component/pop_card/pop_card.css';
import logo from '../logo1.png';
import PopInput from '../component/pop_input/PopInput';
import {
  useState,
  useEffect,
  useContext,
} from 'react';
import axios from 'axios';
import PopButton from '../component/pop_button/PopButton';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { IsLogContext } from '../context/isLog';
import { UserContext } from '../context/user';
import useLocal from '../hooks/useLocal';

export default function Login() {
  const [IsLog, setIsLog] =
    useContext(IsLogContext);

  const [user, setUser] = useContext(UserContext);

  const [email, setEmail] = useLocal('', 'email');
  const [password, setPassword] = useLocal(
    '',
    'password'
  );

  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('token');

    if (token) {
      navigate('/');
    }
  }, []);

  const login = async () => {
    try {
      const response = await axios.post(
        'authentication/sign_in',
        {
          email,
          password,
        }
      );

      setUser(response.data.data);

      // Creating/ Save token to cookie
      Cookies.set('token', response.data.token, {
        expires: 2,
      });

      // Setting default header for all requests to API
      axios.defaults.headers.common[
        'Authorization'
      ] = `${response.data.token}`;

      //Setting global variable for isLoggedIn
      setIsLog(true);
      navigate('/');
    } catch (e) {
      console.log(e.response);
      alert(e.response.data.message);
    }
  };

  return (
    <div className='page-wrapper flex j-sa a-c'>
      <div>
        <img src={logo} alt='logo' height={350} />
      </div>
      <div>
        <PopInput
          label='Email'
          type='email'
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <PopInput
          label='Password'
          type='password'
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
        <PopButton
          value={'Login 🎯'}
          onTap={login}
          type='s'
        />
      </div>
    </div>
  );
}
