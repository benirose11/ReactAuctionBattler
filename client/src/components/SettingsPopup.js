import React, { useState, useContext } from "react";
import { GameStateContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import "./components.css";
import Slider from "./Slider";

export default function SettingsPopup({ toggleModal, tellServer }) {
  const [gamestate] = useContext(GameStateContext);
  const [gameSettings, setGameSettings] = useState({
    budget: 100,
    guystobedrafted: 8,
    guystobeplayed: 4,
    countdown: 5,
  });

  const handleSubmit = () => {
    let newgamestate = { ...gamestate };
    newgamestate[1].bank = gameSettings.budget;
    newgamestate[2].bank = gameSettings.budget;
    newgamestate[3].bank = gameSettings.budget;
    newgamestate[4].bank = gameSettings.budget;
    newgamestate[5].bank = gameSettings.budget;
    newgamestate[6].bank = gameSettings.budget;
    newgamestate[7].bank = gameSettings.budget;
    newgamestate[8].bank = gameSettings.budget;
    newgamestate.global.guystobeplayed = gameSettings.guystobeplayed;
    newgamestate.global.gamesize = gameSettings.guystobedrafted;
    newgamestate.global.bank = gameSettings.budget;
    newgamestate.global.countdown = gameSettings.countdown;

    tellServer("sendLatestSeatingToServer", newgamestate);

    toggleModal();
  };

  return (
    <div className="popup">
      <div className="popup_inner">
        <Col>
          <Row>Adjust Game Settings</Row>
          <Row>
            <Slider
              minval={50}
              maxval={500}
              label={"Draft Budget"}
              gameSettingsKey={"budget"}
              setGameSettings={setGameSettings}
              gameSettings={gameSettings}
            ></Slider>
          </Row>
          <Row>
            <Slider
              minval={2}
              maxval={8}
              label={"Guys to be drafted"}
              gameSettingsKey={"guystobedrafted"}
              setGameSettings={setGameSettings}
              gameSettings={gameSettings}
            ></Slider>
          </Row>
          <Row>
            <Slider
              minval={1}
              maxval={gameSettings.guystobedrafted}
              label={"Guys to be played"}
              gameSettingsKey={"guystobeplayed"}
              setGameSettings={setGameSettings}
              gameSettings={gameSettings}
            ></Slider>
          </Row>
          <Row>
            <Slider
              minval={1}
              maxval={60}
              label={"Countdown Time"}
              gameSettingsKey={"countdown"}
              setGameSettings={setGameSettings}
              gameSettings={gameSettings}
            ></Slider>
          </Row>
          <Row>
            <button onClick={handleSubmit}>Submit</button>
            {/* <button onClick={sendSettingsToServer}>Test tell server</button> */}
          </Row>
        </Col>
      </div>
    </div>
  );
}
