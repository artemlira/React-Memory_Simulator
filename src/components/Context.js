import React, { useState, useEffect, createContext } from 'react';
import useArray from '../hooks/useArray';
import useGameTimer from './../hooks/useGameTimer';
import { TranslateDB } from './TranslateDB';

export const GameContext = createContext();


const Context = (props) => {
  const [selectLevel, setSelectLevel] = useState({});
  const [openWindow, setOpenWindow] = useState(null);
  const [openVinWindow, setOpenVinWindow] = useState(null);
  const [startGame, isStartGame] = useState(false);
  const [gameRating, setGameRating] = useState([]);

  const [compArr, setCompArr, userArr, setUserArr, allUniquePicture] = useArray(selectLevel.count);

  const [currentCart, setCurrentCart] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(null);
  const [result, setResult] = useState([]);
  const [area, setArea] = useState(null);
  const [final, setFinal] = useState(null);

  const [gameMinutes, gameSeconds] = useGameTimer(startGame, isStartGame, final);

  const [language, setLanguage] = useState(null);


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
        id: Math.random() * 10,
        title: `${TranslateDB[language].ratingLevel} ${selectLevel.title}`,
        time: `${gameMinutes > 9 ? gameMinutes : '0' + gameMinutes}:${gameSeconds > 9 ? gameSeconds : '0' + gameSeconds}`
      }])
      // const dataBase = firebase.database();
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
  const [timerRange, setTimerRange] = useState();
  // const [language, setLanguage] = useState(null);
  const [translate, setTranslate] = useState(null);

  useEffect(() => {

    !timerRange && setTimerRange(5);
    !language && setLanguage('ua');
    !translate && setTranslate(TranslateDB[language]);

    const c = localStorage.getItem('settings');
    const l = localStorage.getItem('lang');
    const t = JSON.parse(localStorage.getItem('translate'));

    c && setTimerRange(c);
    l && setLanguage(l);
    t && setTranslate(t);
  }, []);


  useEffect(() => {
    if (timerRange) {
      localStorage.setItem('settings', timerRange);
    }

  }, [timerRange]);

  useEffect(() => {
    if (language) {
      localStorage.setItem('lang', language);
      localStorage.setItem('translate', JSON.stringify(TranslateDB[language]));
    }

  }, [language, translate]);

  useEffect(() => {
    if (language) {
      let t = JSON.parse(localStorage.getItem('translate'));
      t && setTranslate(t);
    }
  }, [language]);

  const timestampeDeclination = (time, arr) => {
    if (time <= 20) {
      if (time === 1) {
        return `${time} ${arr[0]}`;
      } else if (time <= 4 && time > 0) {
        return `${time} ${arr[1]}`;
      } else {
        return `${time} ${arr[2]}`;
      }
    } else {
      if (time % 10 >= 5 || time % 10 === 0) {
        return `${time} ${arr[2]}`;
      } else if (time > 20 && time % 10 === 1) {
        return `${time} ${arr[0]}`;
      } else if (time % 10 <= 4) {
        return `${time} ${arr[1]}`;
      }
    }
  }




  const value = {
    openWindow, setOpenWindow,
    selectLevel, setSelectLevel,
    userArr, setUserArr,
    compArr, setCompArr,
    openVinWindow, setOpenVinWindow,
    startGame, isStartGame,
    currentCart, setCurrentCart,
    currentFloor, setCurrentFloor,
    result, setResult,
    area, setArea,
    dragOver,
    dragLeave,
    dragStart,
    dropHandler,
    allUniquePicture,
    gameMinutes,
    gameSeconds,
    renderGameReting,
    setGameRating,
    gameRating,
    timerRange, setTimerRange,
    language, setLanguage,
    translate,
    final, setFinal,
    timestampeDeclination,
  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  )
}
export default Context;