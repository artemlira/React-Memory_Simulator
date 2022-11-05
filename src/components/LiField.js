import React from 'react';
import DeleteButton from './DeleteButton';

export default function LiField({ item, index, dragOverHandler, dragLeaveHandler, dragEndHandler, dropHandler, startGame, currentClass, currentElement }) {

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

      {/* <DeleteButton currentElement={currentElement} /> */}
    </li>)
}
