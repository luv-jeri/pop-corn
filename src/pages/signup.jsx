import React from "react";
import "./styles/login.css";
import "../styles/index.css";
import Logo from '../logo1.png';
import Login from "./login";
import PopInput from "../component/pop_input/PopInput";
import { useState } from "react";
import PopButton from "../component/pop_input/PopButton";
import { Route, Routes } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const routeChange = () =>{
    <Routes>
      <Route path="/login" element={<Login/>} />
    </Routes>
    }




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
        value={confirmPassword}
        onChange= { (e) =>setConfirmPassword(e.target.value)}
        />
        <PopButton
        value= {'Signup'}
        type='button'
        onClick= {routeChange()}
        />
      </div>
    </div>
  );
}
