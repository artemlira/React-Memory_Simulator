import React from 'react'
import LiField from './LiField';

export default function GameFieldInner({ arr, userLevel, startGame, dragStart, dragOver, dragLeave, dropHandler }) {

  let count = arr.length;


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
      {!startGame ?
        arr.map((item, index) =>
          <LiField
            key={index}
            item={item}
            index={index}
          // startGame={startGame}
          // dragStart={dragStart}
          // dragOver={dragOver}
          // dragLeave={dragLeave}
          // dropHandler={dropHandler}
          />)
        :
        userLevel.map((item, index) =>
          <LiField
            key={index}
            item={item}
            index={index}
            startGame={startGame}
            dragStart={dragStart}
            dragOver={dragOver}
            dragLeave={dragLeave}
            dropHandler={dropHandler}
          />)
      }
    </ul >
  )
}



