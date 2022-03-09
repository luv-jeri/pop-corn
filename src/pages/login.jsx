/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './styles/login.css';
import '../styles/index.css';
import "../component/pop_card/pop_card.css";
import logo from '../logo1.png';
import PopInput from '../component/pop_input/PopInput';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PopButton from '../component/pop_button/PopButton';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        'http://localhost:8080/api/v1/authentication/sign_in',
        {
          email,
          password,
        }
      );

      Cookies.set('token', response.data.token, {
        expires: 1,
      });

      navigate('/');
    } catch (e) {
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
