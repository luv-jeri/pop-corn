import React from 'react';
import './styles/login.css';
import '../styles/index.css';
import logo from '../logo1.png';
import PopInput from '../component/pop_input/PopInput';
import { useState } from 'react';
import axios from 'axios';
import PopButton from '../component/pop_input/PopButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    const res = axios.post(
      'http://localhost:8080/api/v1/authentication/sign_in',
    );

    res.then((response) => {
      console.log(response.data.data);
    });

    res.catch((error) => {
      console.log(error);
    });
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
