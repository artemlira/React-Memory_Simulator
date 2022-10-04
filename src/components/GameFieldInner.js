import React from 'react'

export default function GameFieldInner({ count, arr }) {

  let template = {}

  const generateTemplate = () => {

    if (count === 0) {
      return null;
    }

    if (count === 4) {
      return template = {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr'
      }
    }
    
    if (count === 6) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr'
      }
    }

    if (count === 9) {
      return template = {
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr'
      }
    }

    return template;
  }

  return (
    <ul className='field__items' style={generateTemplate()}>

      {arr.map(item =>
        <li className='field__item'>
          <img src={item} alt='element' />
        </li>)}
    </ul>
  )
}



