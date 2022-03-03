import React from 'react';
import './styles/login.css';
import '../styles/index.css';
import Logo from '../logo1.png';
import PopInput from '../component/pop_input/PopInput';
import { useState, useEffect } from 'react';
import PopButton from '../component/pop_input/PopButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  useEffect(() => {
    if (Cookie.get('token')) {
      navigate('/');
    }
  }, []);

  const signup = async () => {
    if (password !== confirmPassword) {
      alert('Password does not match');
      setConfirmPassword('');
      setPassword('');
      return;
    }
    try {
      const res = await axios.post(
        'http://localhost:8080/api/v1/authentication/sign_up',
        {
          email,
          name,
          password,
          passwordConfirm: confirmPassword,
        }
      );

      Cookie.set('token', res.data.token);

      navigate('/');
    } catch (e) {
      alert(e.response.data.message);
      console.log('error', e);
    }
  };

  return (
    <div className='page-wrapper flex j-sa a-c'>
      <div>
        <img src={Logo} alt='logo' height={350} />
      </div>
      <div>
        <PopInput
          label='Name'
          type='name'
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />
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
        <PopInput
          label='Confirm Password'
          type='password'
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
        />
        <PopButton
          value={'Signup 👋🏻'}
          type='s'
          onTap={signup}
        />
      </div>
    </div>
  );
}
