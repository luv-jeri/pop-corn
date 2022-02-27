import React from "react";
import "./styles/login.css";
import "../styles/index.css";
import Logo from '../logo1.png';
import PopInput from "../component/pop_input/PopInput";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  return(
    <div className="page-wrapper flex j-sa a-c">
      <div>
        < img src={Logo} alt='logo' height={350}/>
      </div>
      <div>
        <PopInput
        label='Name'
        type ='name'
        value={name}
        onChange={(e) =>setName(e.target.value)}
        />
        <PopInput
        label ='Email'
        type='email'
        value={email}
        onChange= { (e) =>setEmail(e.target.value)}
        />
        <PopInput
        label ='Password'
        type='password'
        value={password}
        onChange= { (e) =>setPassword(e.target.value)}
        />
        <PopInput
        label ='Confirm Password'
        type='password'
        value={password}
        onChange= { (e) =>setPassword(e.target.value)}
        />

      </div>
    </div>
  );
}
