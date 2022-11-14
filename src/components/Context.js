import React, { useState, useEffect, createContext } from 'react';
import useArray from '../hooks/useArray';
import useTimer from '../hooks/useTimer';

export const GameContext = createContext();

const Context = (props) => {
  const timer = 5;
  const [selectLevel, setSelectLevel] = useState({});
  const [openWindow, setOpenWindow] = useState(null);
  const [openVinWindow, setOpenVinWindow] = useState(null);
  const [startGame, isStartGame] = useState(false);
  const [time, setTime] = useState(timer);
  const [minutes, seconds] = useTimer(selectLevel, time, setTime);
  
  const [arr, userLevel] = useArray(selectLevel.count);


  const [userArr, setUserArr] = useState([]);
  const [compArr, setCompArr] = useState([]);


  const [currentCart, setCurrentCart] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(null);
  const [result, setResult] = useState([]);
  const [area, setArea] = useState(null);

  useEffect(() => {
    setUserArr(userLevel);
    setCompArr(arr);
  }, [selectLevel]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) { isStartGame(true) }
  }, [minutes, seconds]);

  useEffect(() => {
    if (result.length > 0) {
      setOpenVinWindow(result.every(item => item === true));
    }
  }, [result]);

  useEffect(() => {
    setResult(userArr.map((item, index) => {

      if (item.elem === compArr[index].elem) {
        return true;
      } else {
        return false;
      }
    }))

  }, [userArr]);

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
      setUserArr(userArr.map(item => {
        if (item.id === currentFloor.id) {
          return { id: item.id, elem: currentCart.elem };
        } else {
          return item;
        }
      }))
    }

    if (area === 'two') {
      setUserArr(userArr.map(item => {
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

  const value = {
    openWindow,
    setOpenWindow,
    selectLevel,
    setSelectLevel,
    userArr,
    setUserArr,
    compArr,
    setCompArr,
    openVinWindow,
    setOpenVinWindow,
    time,
    setTime,
    startGame,
    isStartGame,
    timer,
    minutes,
    seconds,
    currentCart,
    setCurrentCart,
    currentFloor,
    setCurrentFloor,
    result,
    setResult,
    area,
    setArea,
    dragOver,
    dragLeave,
    dragStart,
    dropHandler,
  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  )
}
export default Context;