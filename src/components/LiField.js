import React from 'react';


export default function LiField({ item, index, dragStart, dragOver, dragLeave, dropHandler }) {

  return (
    <li
      className='field__item'
      key={index}
      onDragOver={e => dragOver(e, item)}
      onDragLeave={e => dragLeave(e)}
      onDragStart={e => dragStart(e, item, 'two')}
      onDrop={e => dropHandler(e, item)}
    >
      {item.elem && <img src={item.elem} alt='pic' />}

    </li>)
}
