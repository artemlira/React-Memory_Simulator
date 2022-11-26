import React, { useContext, useEffect } from "react";
import Menu from "./components/Menu";
import FirstScreen from "./components/FirstScreen";
import GameField from "./components/GameField";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";
import Rating from './components/Rating';
import Modal from "./components/Modal";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";

import useAuth from "./hooks/useAuth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GameContext } from './components/Context';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEeBEoEQHqcwRNtVMLLTrQL5dsp6FALI",
  authDomain: "memory-simulator.firebaseapp.com",
  projectId: "memory-simulator",
  storageBucket: "memory-simulator.appspot.com",
  messagingSenderId: "683759577289",
  appId: "1:683759577289:web:2fa7aa436eea1c2223c518"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function App() {
  const data = useContext(GameContext);

  // const authFirebase = firebase.auth;
  const auth = useAuth(firebase.auth);

  const dataBase = firebase.database();

  const addResultDataBase = () => {
    dataBase.ref('result').push().set({
      // nameUser: auth.aythentification.displayName,
      // email: auth.aythentification.email,
      result: data.gameRating
    });
  }

  useEffect(() => {
    addResultDataBase();
  }, [data.gameRating]);

  return (
    <>
      <section className="main">
        <Router>
          <div className="gamefield">
            <Switch>
              <Route exact path='/'>
                <FirstScreen {...auth} />
              </Route>
              <Route path='/settings' component={Settings} />
              <Route path='/rating' component={Rating} />
              <Route path='/game'>
                <GameField />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
          <div className="menu">
            <Menu />
          </div>
        </Router>
      </section>
      <Modal />
    </>
  );
}

export default App;
