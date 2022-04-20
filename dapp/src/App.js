import React, { useState } from "react";
import "./App.css";
import Claim from "./components/Claim";
import Footer from "./components/Footer";
import Heroes from "./components/Heroes";
import LevelUpModal from "./components/LevelUpModal";
import Nav from "./components/Nav";
import PowerUps from "./components/PowerUps";
import Excalibur from "./components/Excalibur";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const [hero, setHero] = useState({});

  return (
    <>
      <Nav />
      <LevelUpModal handleClose={() => setHero({})} hero={hero} />
      <header class="masthead" id="game">
        <div class="container text-center justify-content-center">
          <Claim />
          <Provider store={store}>
            <div class="row text-center justify-content-center mb-4">
              <Heroes setHero={setHero} />
              <PowerUps />
              <Excalibur />
            </div>
          </Provider>
        </div>
      </header>
      <Footer />
    </>
  );
}
