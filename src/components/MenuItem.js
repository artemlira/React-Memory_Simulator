import React from 'react'

export default function MenuItem({ image, title }) {
  return (
    <li className='menu__item'>
      <img src={image} alt={title} />
      <span>{title}</span>
    </li>
  )
}
