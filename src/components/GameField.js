import React from 'react'
import { images } from './ImagesDB';
import '../styles/gamefield.css'
import GameFieldInner from './GameFieldInner';

export default function GameField({ selectLevel }) {
  return (
    <>
      <h2>Рівень складності {selectLevel}</h2>
      <div className='timer'>00:00</div>
      <div className='field'>
        <GameFieldInner
          selectLevel={selectLevel}
        />
      </div>
      <div className='details'>
        <ul className='details__items'>
          <li className='details__item'>
            <img src={images[3]} alt="element" />
          </li>
          <li className='details__item'>
            <img src={images[4]} alt="element" />
          </li>
          <li className='details__item'>
            <img src={images[5]} alt="element" />
          </li>
          <li className='details__item'>
            <img src={images[6]} alt="element" />
          </li>
        </ul>
      </div>

    </>
  )
}
