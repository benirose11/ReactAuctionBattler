import "./components.css";
import { React, useState, useContext } from "react";
import { GameStateContext } from "../context/context";
import { Row, Col } from "react-bootstrap";
import SettingsPopup from "./SettingsPopup";

function UserNamePanel({ cookies, tellServer, resetGame, removeCookie }) {
  const [settingsModalClicked, toggleModal] = useState(false);
  const [gamestate] = useContext(GameStateContext);

  const resetUsername = () => {
    removeCookie("Name");
  };

  const settingsModal = () => {
    toggleModal((prevState) => {
      return !prevState;
    });
  };

  const resGame = () => {
    resetGame(cookies.Name);
  };

  return (
    <>
      <div>
        <h1>
          Your current user name is {cookies.Name} and your seat is{" "}
          {cookies.Seat}
        </h1>
        <button onClick={resetUsername}>Reset User Name</button>
        <button onClick={resGame}>Reset Seats and Game</button>
      </div>
      {settingsModalClicked && (
        <SettingsPopup
          clicked={settingsModalClicked}
          toggleModal={settingsModal}
          tellServer={tellServer}
        />
      )}
      <div id="gameSettingsDisplay">
        <Col>
          <Row>
            <h5>Current Game Settings</h5>
          </Row>
          <Row>
            <h6>Draft Budget: {gamestate.global.bank}</h6>
          </Row>
          <Row>
            <h6>Roster Size: {gamestate.global.gamesize}</h6>
          </Row>
          <Row>
            <h6>Roster Slots for Battle: {gamestate.global.guystobeplayed}</h6>
          </Row>
          <Row>
            <h6>Bid Timer Countdown: {gamestate.global.countdown}</h6>
          </Row>
        </Col>
      </div>
      <button onClick={settingsModal} id="settingsButton" />
    </>
  );
}

export default UserNamePanel;
