import React, { useState, useEffect, createContext } from 'react';
import useArray from '../hooks/useArray';
import useTimer from '../hooks/useTimer';
import useGameTimer from './../hooks/useGameTimer';

export const GameContext = createContext();


const Context = (props) => {
  const [timerRange, setTimerRange] = useState();
  const [selectLevel, setSelectLevel] = useState({});
  const [openWindow, setOpenWindow] = useState(null);
  const [openVinWindow, setOpenVinWindow] = useState(null);
  const [startGame, isStartGame] = useState(false);
  // const [time, setTime] = useState(timerRange);
  // const [minutes, seconds] = useTimer(selectLevel, timerRange);
  const [gameRating, setGameRating] = useState([]);
  // console.log(timerRange);
  // console.log(time);
  const [compArr, setCompArr, userArr, setUserArr, allUniquePicture] = useArray(selectLevel.count);

  const [currentCart, setCurrentCart] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(null);
  const [result, setResult] = useState([]);
  const [area, setArea] = useState(null);
  const [final, setFinal] = useState(null);

  const [gameMinutes, gameSeconds] = useGameTimer(startGame, isStartGame, final);


  // useEffect(() => {
  //   if (minutes === 0 && seconds === 0) { isStartGame(true) }
  // }, [minutes, seconds]);

  useEffect(() => {
    if (result.length > 0) {
      setFinal(result.every(item => item === true));
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

  //Rating
  const sortRating = (a, b) => {
    if (a.time > b.time) {
      return 1;
    } else {
      return -1;
    }
  }

  const renderGameReting = gameRating.sort(sortRating).slice(0, 10);

  useEffect(() => {
    if (final) {
      setGameRating([...gameRating, {
        id: 1,
        title: `Рівень ${selectLevel.title}`,
        time: `${gameMinutes > 9 ? gameMinutes : '0' + gameMinutes}:${gameSeconds > 9 ? gameSeconds : '0' + gameSeconds}`
      }])
    }
  }, [final]);

  useEffect(() => {

    const dataLocalStorage = JSON.parse(localStorage.getItem('gameRating'));
    dataLocalStorage && setGameRating(dataLocalStorage);
  }, []);

  useEffect(() => {

    if (gameRating.length) {
      localStorage.setItem('gameRating', JSON.stringify(gameRating));
    }

  }, [gameRating]);

  //Settings
  // const [timerRange, setTimerRange] = useState();
  const [language, setLanguage] = useState(null);

  useEffect(() => {

    !timerRange && setTimerRange(5);
    !language && setLanguage('ua');

    const c = localStorage.getItem('settings');
    const l = localStorage.getItem('lang');

    l && setLanguage(l);
    c && setTimerRange(c);
  }, []);

  useEffect(() => {
    if (timerRange) {
      localStorage.setItem('settings', timerRange);
    }

  }, [timerRange]);

  useEffect(() => {
    language && localStorage.setItem('lang', language);
  }, [language]);




  const value = {
    openWindow, setOpenWindow,
    selectLevel, setSelectLevel,
    userArr, setUserArr,
    compArr, setCompArr,
    openVinWindow, setOpenVinWindow,
    // time,
    // setTime,
    startGame, isStartGame,
    // timer,
    currentCart, setCurrentCart,
    currentFloor, setCurrentFloor,
    result, setResult,
    area, setArea,
    dragOver,
    dragLeave,
    dragStart,
    dropHandler,
    allUniquePicture,
    // minutes, seconds,
    gameMinutes,
    gameSeconds,
    renderGameReting,
    setGameRating,
    gameRating,
    timerRange, setTimerRange,
    language, setLanguage,

  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  )
}
export default Context;