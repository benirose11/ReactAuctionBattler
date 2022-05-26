import React, { useState, useContext } from "react";
import { GameStateContext } from "../../context/context";
import { Row, Col, Container } from "react-bootstrap";

import "./SettingsPopup.css";
import Slider from "./Slider";

export default function SettingsPopup({ toggleModal, tellServer }) {
  const [gamestate, setGameState] = useContext(GameStateContext);
  const [gameSettings, setGameSettings] = useState({
    bank: gamestate.global.bank,
    gamesize: gamestate.global.gamesize,
    guystobeplayed: gamestate.global.guystobeplayed,
    countdown: gamestate.global.countdown,
  });

  const handleSubmit = () => {
    let newgamestate = { ...gamestate };
    newgamestate[1].bank = gameSettings.bank;
    newgamestate[2].bank = gameSettings.bank;
    newgamestate[3].bank = gameSettings.bank;
    newgamestate[4].bank = gameSettings.bank;
    newgamestate[5].bank = gameSettings.bank;
    newgamestate[6].bank = gameSettings.bank;
    newgamestate[7].bank = gameSettings.bank;
    newgamestate[8].bank = gameSettings.bank;
    newgamestate.global.guystobeplayed = gameSettings.guystobeplayed;
    newgamestate.global.gamesize = gameSettings.gamesize;
    newgamestate.global.bank = gameSettings.bank;
    newgamestate.global.countdown = gameSettings.countdown;

    tellServer("sendLatestSeatingToServer", newgamestate);

    toggleModal();
  };

  const handleClose = () => {
    toggleModal();
  };
  const handleReset = () => {
    let newgamestate = { ...gamestate };
    newgamestate[1].bank = 100;
    newgamestate[2].bank = 100;
    newgamestate[3].bank = 100;
    newgamestate[4].bank = 100;
    newgamestate[5].bank = 100;
    newgamestate[6].bank = 100;
    newgamestate[7].bank = 100;
    newgamestate[8].bank = 100;
    newgamestate.global.guystobeplayed = 4;
    newgamestate.global.gamesize = 8;
    newgamestate.global.bank = 100;
    newgamestate.global.countdown = 5;

    setGameState(newgamestate);
    tellServer("sendLatestSeatingToServer", newgamestate);
    setGameSettings({
      bank: 100,
      gamesize: 8,
      guystobeplayed: 4,
      countdown: 5,
    });
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <Container>
          <Row className={"settingsheader"}>Game Settings</Row>

          <Slider
            minval={50}
            maxval={500}
            label={"Draft Budget"}
            gameStateKey={"bank"}
            setGameSettings={setGameSettings}
            gameSettings={gameSettings}
          ></Slider>

          <Slider
            minval={2}
            maxval={8}
            label={"Guys to be drafted"}
            gameStateKey={"gamesize"}
            setGameSettings={setGameSettings}
            gameSettings={gameSettings}
          ></Slider>

          <Slider
            minval={1}
            maxval={gameSettings.gamesize}
            label={"Guys to be played"}
            gameStateKey={"guystobeplayed"}
            setGameSettings={setGameSettings}
            gameSettings={gameSettings}
          ></Slider>

          <Slider
            minval={1}
            maxval={60}
            label={"Countdown Time"}
            gameStateKey={"countdown"}
            setGameSettings={setGameSettings}
            gameSettings={gameSettings}
          ></Slider>

          <Row className={"buttonrow"}>
            <button onClick={handleSubmit} className={"submitbutton submitimg"}>
              Submit
            </button>
            <button onClick={handleClose} className={"closebutton closeimg"}>
              Close
            </button>
            <button onClick={handleReset} className={"resetbutton resetimg"}>
              Reset to default
            </button>
          </Row>
        </Container>
      </div>
    </div>
  );
}
