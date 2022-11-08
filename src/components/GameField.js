import React, { useState, useEffect } from 'react';
import '../styles/gamefield.scss';
import GameFieldInner from './GameFieldInner';
import DetailsInner from './DetailsInner';
import Timer from './Timer';
import useTimer from '../hooks/useTimer';


export default function GameField({ selectLevel, arr, userLevel, setUserLevel, currentCart, setCurrentCart, currentFloor, setCurrentFloor, result, setResult, area, setArea }) {


  const [minutes, seconds] = useTimer(selectLevel);
  const [startGame, isStartGame] = useState(false);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) { isStartGame(true) }
  }, [minutes, seconds]);

  const dragOver = (e, floor) => {
    e.preventDefault();
    e.target.style.outline = 'red dashed 3px';
    e.target.style.outlineOffset = '-7px';
    setCurrentFloor(floor);
  }

  const dragLeave = (e) => {
    e.target.style.outline = null;
    e.target.style.outlineOffset = null;
  }

  const dragStart = (e, cart, c) => {
    setCurrentCart(cart);
    setArea(c);
  }

  const dropHandler = (e, cart) => {
    e.preventDefault();

    if (area === 'one') {
      setUserLevel(userLevel.map(item => {
        if (item.id === currentFloor.id) {
          return { id: item.id, elem: currentCart.elem };
        } else {
          return item;
        }
      }))
    }

    if (area === 'two') {
      setUserLevel(userLevel.map(item => {
        if (item.id === cart.id) {
          return { id: item.id, elem: currentCart.elem }
        }

        if (item.id === currentCart.id) {
          return { id: item.id, elem: cart.elem }
        }

        else return item;
      }));
    }
    e.target.style.outline = null;
    e.target.style.outlineOffset = null;
  }


  return (
    <>
      <h2>Рівень складності {selectLevel.title}</h2>
      {
        selectLevel.title && <Timer minutes={minutes} seconds={seconds} />
      }
      <div className='field'>
        <GameFieldInner
          arr={arr}
          userLevel={userLevel}
          startGame={startGame}
          dragStart={dragStart}
          dragOver={dragOver}
          dragLeave={dragLeave}
          dropHandler={dropHandler}
        />
      </div>
      <div className='details'>
        <DetailsInner
          arr={arr}
          dragStart={dragStart}
        />
      </div>
    </>
  )
}
