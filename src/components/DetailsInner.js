import React from 'react'
import { pics } from './ImagesDB';

export default function DetailsInner() {
  return (
    <ul className='details__items'>
      {pics.map(item =>
        <li className='details__item'>
          <img src={item} alt="element" />
        </li>
      )}
    </ul>
  )
}
