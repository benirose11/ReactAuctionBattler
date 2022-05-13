import React, { useContext } from "react";
import "./components.css";
import { GameStateContext } from "../context/context";

export default function Submitrosterarea({ id, cookies }) {
  const [gamestate] = useContext(GameStateContext);
  let playermessage = "";

  if (cookies.Seat == id) {
    playermessage = `The roster size is set to ${gamestate.global.guystobeplayed}. You currently have ${gamestate[id].selectedguys.length} selected for battle`;
  } else {
    playermessage = "Awaiting Opponents Roster Submission..";
  }

  if (gamestate[id]["submitted"])
    playermessage = "Roster Submitted, Awaiting Battle!";
  return (
    <>
      {gamestate.global.gamePhase === "selecting" ? (
        <h5>{playermessage}</h5>
      ) : (
        <div></div>
      )}
    </>
  );
}
