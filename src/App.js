import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import FirstScreen from "./components/FirstScreen";
import GameField from "./components/GameField";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import Rating from './components/Rating';
import Modal from "./components/Modal";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import useArray from "./hooks/useArray";



function App() {
  const timer = 5;
  const [openWindow, setOpenWindow] = useState(null);
  const [selectLevel, setSelectLevel] = useState({});
  const [openVinWindow, setOpenVinWindow] = useState(null);
  const [startGame, isStartGame] = useState(false);
  const [time, setTime] = useState(timer);

  //поточний ігровий раунд та масив для версії ігрока
  const [arr, userLevel] = useArray(selectLevel.count);

  //масиви, де ці дублі зберігаються
  const [userArr, setUserArr] = useState([]);
  const [compArr, setCompArr] = useState([]);


  useEffect(() => {
    setUserArr(userLevel);
    setCompArr(arr);
  }, [selectLevel]);

  const [currentCart, setCurrentCart] = useState(null);
  const [currentFloor, setCurrentFloor] = useState(null);
  const [result, setResult] = useState([]);
  const [area, setArea] = useState(null);

  useEffect(() => {
    if (result.length > 0) {
      setOpenVinWindow(result.every(item => item === true));
    }
  }, [result]);


  return (
    <>
      <section className="main">
        <Router>
          <div className="gamefield">

            <Switch>
              <Route exact path='/'>
                <FirstScreen
                  setOpenWindow={setOpenWindow}
                  selectLevel={selectLevel.title}
                />
              </Route>
              <Route path='/settings' component={Settings} />
              <Route path='/rating' component={Rating} />
              <Route path='/game'>
                <GameField
                  selectLevel={selectLevel}
                  startGame={startGame}
                  isStartGame={isStartGame}
                  time={time}
                  setTime={setTime}
                  // arr={arr}
                  arr={compArr}
                  userLevel={userArr}
                  setUserLevel={setUserArr}
                  currentCart={currentCart}
                  setCurrentCart={setCurrentCart}
                  currentFloor={currentFloor}
                  setCurrentFloor={setCurrentFloor}
                  // result={result}
                  setResult={setResult}
                  area={area}
                  setArea={setArea}
                />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="menu">
            <Menu
              setOpenWindow={setOpenWindow} />
          </div>
        </Router>
      </section>
      <Modal openWindow={openWindow}
        setOpenWindow={setOpenWindow}
        selectLevel={selectLevel}
        setSelectLevel={setSelectLevel}
        openVinWindow={openVinWindow}
        setOpenVinWindow={setOpenVinWindow}
        isStartGame={isStartGame}
        setTime={setTime}
        timer={timer}
      />
    </>
  );
}

export default App;
