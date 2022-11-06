import React from 'react';


export default function LiField({ item, index, dragOverHandler, dragLeaveHandler, dragEndHandler, dropHandler, startGame, currentClass, currentElement }) {

  console.log(startGame);

  return (
    <li
      className='field__item'
      key={index}
      onDragOver={e => dragOverHandler(e)}
      onDragLeave={e => dragLeaveHandler(e)}
      onDragEnd={e => dragEndHandler(e)}
      onDrop={e => dropHandler(e)}
    >
      {
        !startGame &&
        <img
          src={item.elem}
          alt='element' />
      }

    </li>)
}
