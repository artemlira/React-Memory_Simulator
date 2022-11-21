import React, { useContext } from 'react'
import Logo from '../images/logo.svg';
import '../styles/firstscreen.scss';
import { useHistory } from 'react-router-dom';
import { GameContext } from './Context';
import { TranslateDB } from './TranslateDB';

export default function FirstScreen() {
  const data = useContext(GameContext);

  const history = useHistory();

  if (data.selectLevel.title) {
    return history.push('/game');
  }

  return (

    <div className='first__screen'>
      <img src={Logo} alt="Logo" />
      <button
        className='button'
        onClick={() => data.setOpenWindow(true)}
      >{data.language && TranslateDB[data.language].firstScreenButton}</button>
    </div>
  )
}
