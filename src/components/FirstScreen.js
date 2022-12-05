import React, { useContext } from 'react'
import Logo from '../images/logo.svg';
import '../styles/firstscreen.scss';
import { useHistory } from 'react-router-dom';
import { GameContext } from './Context';


export default function FirstScreen({ aythentification, logIn, logOut }) {
  const data = useContext(GameContext);
  const labels = { ...data.translate };

  const history = useHistory();

  if (data.selectLevel.title) {
    return history.push('/game');
  }

  return (

    <div className='first__screen'>
      <img src={Logo} alt="Logo" />

      {
        !aythentification
          ?
          <button
            className='button'
            onClick={() => logIn()}
          >{labels.firstScreenTitleIn}</button>
          :
          <button
            className='button'
            onClick={() => logOut()}
          >{labels.firstScreenTitleOut}</button>
      }
    </div>
  )
}
