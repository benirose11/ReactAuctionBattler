import "../components.css";
import { React, useState, useContext } from "react";
import { GameStateContext } from "../../context/context";
import { Row, Col } from "react-bootstrap";
import SettingsPopup from "../Settings/SettingsPopup";
import UserNameAndSeatDisplay from "./UserNameAndSeatDisplay";
import GameSettingsDisplay from "./GameSettingsDisplay";

function UserNamePanel({ cookies, tellServer, resetGame, removeCookie }) {
  const [settingsModalClicked, toggleModal] = useState(false);
  const [gamestate] = useContext(GameStateContext);
  const [gameSettings, setGameSettings] = useState({
    budget: 100,
    guystobedrafted: 8,
    guystobeplayed: 4,
    countdown: 5,
  });

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

      <GameSettingsDisplay
        gamestate={gamestate}
        settingsModal={settingsModal}
      />
    </Row>
  );
}

export default UserNamePanel;
