import React from 'react'
import Logo from '../images/logo.svg';
import '../styles/firstscreen.scss';
import { useHistory } from 'react-router-dom';

export default function FirstScreen({ setOpenWindow, selectLevel }) {

  const history = useHistory();

  if (selectLevel) {
    return history.push('/game');
  }

  return (
    <div className='first__screen'>
      <img src={Logo} alt="Logo" />
      <button
        className='button'
        onClick={() => setOpenWindow(true)}
      >Грати</button>
    </div>
  )
}
