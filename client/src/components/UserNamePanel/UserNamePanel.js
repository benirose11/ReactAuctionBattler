import "../components.css";
import { React, useState, useContext } from "react";
import { GameStateContext } from "../../context/context";
import { Row, Col } from "react-bootstrap";
import SettingsPopup from "../Settings/SettingsPopup";
import UserNameAndSeatDisplay from "./UserNameAndSeatDisplay";
import GameSettingsDisplay from "./GameSettingsDisplay";
import GameStatus from "./GameStatus";

function UserNamePanel({ cookies, tellServer, resetGame, removeCookie }) {
  const [settingsModalClicked, toggleModal] = useState(false);
  const [gamestate] = useContext(GameStateContext);
  const [gameSettings, setGameSettings] = useState({
    budget: 100,
    guystobedrafted: 8,
    guystobeplayed: 4,
    countdown: 5,
  });

  let filledSeats = 0;
  for (let i = 1; i < 9; i++) {
    if (gamestate[i].seatfilled === true) {
      filledSeats++;
    }
  }
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
    <Row className="justify-content-start usernamerow">
      <UserNameAndSeatDisplay
        cookies={cookies}
        resetGame={resetGame}
        removeCookie={removeCookie}
      />

      {settingsModalClicked && (
        <SettingsPopup
          gameSettings={gameSettings}
          setGameSettings={setGameSettings}
          clicked={settingsModalClicked}
          toggleModal={settingsModal}
          tellServer={tellServer}
        />
      )}

      <GameStatus
        gamestate={gamestate}
        filledSeats={filledSeats}
        tellServer={tellServer}
      ></GameStatus>

      <GameSettingsDisplay
        gamestate={gamestate}
        settingsModal={settingsModal}
      />
    </Row>
  );
}

export default UserNamePanel;
