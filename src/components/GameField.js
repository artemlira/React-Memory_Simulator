import React from 'react'
import { images } from './ImagesDB';
import '../styles/gamefield.css'

export default function GameField() {
  return (
    <>
      <h2>Рівень 1</h2>
      <div className='timer'>00:00</div>
      <div className='field'>
        <ul className='field__items'>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
          <li className='field__item'>

          </li>
        </ul>
      </div>
      <div className='details'>
        <ul className='details__items'>
          <li className='details__item'>
            {/* <img src={images[3]} alt="element" /> */}
          </li>
          <li className='details__item'>
            {/* <img src={images[3]} alt="element" /> */}
          </li>
          <li className='details__item'>
            {/* <img src={images[3]} alt="element" /> */}
          </li>
          <li className='details__item'>
            {/* <img src={images[3]} alt="element" /> */}
          </li>
        </ul>
      </div>

    </>
  )
}
