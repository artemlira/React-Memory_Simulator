import React from 'react'

export default function GameFieldInner({ selectLevel }) {
  let template = {

  }

  const generateTemplate = () => {

    if (selectLevel === 0) {
      return 0;
    }
    if (selectLevel === 1) {
      return template = {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr'
      }
    }
    if (selectLevel === 2) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr'
      }
    }
    if (selectLevel === 3) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr'
      }
    }

    return template;
  }



  return (
    <ul className='field__items' >
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
      <li className='field__item'></li>
    </ul>
  )
}



