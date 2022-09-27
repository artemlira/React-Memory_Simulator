import React from 'react'
import Logo from '../images/logo.svg';
import '../styles/firstscreen.css';

export default function FirstScreen() {
  return (
    <div className='first__screen'>
      <img src={Logo} alt="Logo" />
      <button className='button'> Грати</button>
    </div>
  )
}
