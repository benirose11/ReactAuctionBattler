import "./components.css";
import { React, useState } from "react";
import SettingsPopup from "./SettingsPopup";

function UserNamePanel(props) {
  const [settingsModalClicked, toggleModal] = useState(false);

  const resetUsername = () => {
    props.removeCookie("Name");
  };

  const settingsModal = () => {
    toggleModal((prevState) => {
      return !prevState;
    });
  };

  const resetGame = () => {
    props.resetGame(props.cookies.Name);
  };

  return (
    <>
      <div>
        <h1>
          Your current user name is {props.cookies.Name} and your seat is{" "}
          {props.cookies.Seat}
        </h1>
        <button onClick={resetUsername}>Reset User Name</button>
        <button onClick={resetGame}>Reset Seats and Game</button>
      </div>
      {settingsModalClicked && (
        <SettingsPopup
          clicked={settingsModalClicked}
          toggleModal={settingsModal}
        />
      )}

      <button onClick={settingsModal} id="settingsButton" />
    </>
  );
}

export default UserNamePanel;
