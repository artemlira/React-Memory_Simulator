import React from "react";
import Menu from "./components/Menu";
import FirstScreen from "./components/FirstScreen";
import GameField from "./components/GameField";


function App() {
  return (
    <section className="main">
      <div className="gamefield">
        {/* <FirstScreen /> */}
        <GameField />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </section>
  );
}

export default App;
