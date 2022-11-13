import React, { useState, useEffect, createContext } from 'react';
import useArray from '../hooks/useArray'

export const GameContext = createContext();

const Context = (props) => {
  const [selectLevel, setSelectLevel] = useState({});
  const [openWindow, setOpenWindow] = useState(null);
  const [arr, userLevel] = useArray(selectLevel.count);


  const [userArr, setUserArr] = useState([]);
  const [compArr, setCompArr] = useState([]);

  useEffect(() => {
    setUserArr(userLevel);
    setCompArr(arr);
  }, [selectLevel]);



  // const [gameLevel, allUniquePicture, gameFloor] = useArray(selectLevel.count);

  // const [gameFloorState, getGameFloorState] = useState([]);
  // const [gameLevelState, getGameLevelState] = useState([]);
  // const [allUniquePictureState, setAllUniquePictureState] = useState([]);

  // useEffect(() => {
  //   getGameFloorState(gameFloor);
  //   getGameLevelState(gameLevel);
  //   setAllUniquePictureState(allUniquePicture);
  // }, [selectLevel.count]);

  //для перетягування
  // const [currentCart, setCurrentCart] = useState(null);
  // const [currentFloor, setCurrentFloor] = useState(null);
  // const [result, setResult] = useState([]);
  // const [area, setArea] = useState(null);
  // const [final, setFinal] = useState(null);

  // const dragOverHandler = (e, floor) => {
  //   e.preventDefault();
  //   e.target.style.outline = '#777 dashed 3px';
  //   e.target.style.outlineOffset = '-7px';
  //   setCurrentFloor(floor);

  // }

  // const dragLeaveHandler = (e) => {
  //   e.target.style.outline = null;
  //   e.target.style.outlineOffset = null;
  // }

  // const dragStartHandler = (e, cart, c) => {
  //   setCurrentCart(cart);
  //   setArea(c);
  // }

  // const dragEndHandler = (e) => {
  //   e.target.style.outline = null;
  //   e.target.style.outlineOffset = null;
  // }

  // const dropHandler = (e, cart) => {
  //   e.preventDefault();

  //   if (area === 'one') {
  //     getGameFloorState(gameFloorState.map(item => {
  //       if (item.id === currentFloor.id) {
  //         return { id: item.id, pic: currentCart.pic };
  //       } else {
  //         return item;
  //       }
  //     }))
  //   }

  //   if (area === 'two') {
  //     getGameFloorState(gameFloorState.map(item => {
  //       if (item.id === cart.id) {
  //         return { id: item.id, pic: currentCart.pic }
  //       }

  //       if (item.id === currentCart.id) {
  //         return { id: item.id, pic: cart.pic }
  //       }

  //       else return item;
  //     }));
  //   }
  //   e.target.style.outline = null;
  //   e.target.style.outlineOffset = null;
  // }

  // useEffect(() => {
  //   setResult(gameFloorState.map((item, index) => {

  //     if (item.pic === gameLevelState[index].pic) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }))

  // }, [gameFloorState]);

  // useEffect(() => {
  //   let c = result.every(item => item === true);
  //   if (result.length > 0 && c) {
  //     setFinal(true);
  //     setOpenWindow(true);
  //   }

  // }, [result]);

  const value = {
    openWindow,
    setOpenWindow,
    selectLevel,
    setSelectLevel,
    userArr,
    setUserArr,
    compArr,
    setCompArr,


    // gameLevel,
    // allUniquePicture,
    // gameFloor,
    // dragOverHandler,
    // dragLeaveHandler,
    // dragStartHandler,
    // dragEndHandler,
    // dropHandler,
    // gameFloorState,
    // getGameFloorState,
    // allUniquePictureState,
    // gameLevelState,
    // final
  };

  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  )
}
export default Context;