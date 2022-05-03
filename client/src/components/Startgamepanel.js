import { Button } from "react-bootstrap";
import { useContext } from "react";
import { GameStateContext } from "../context/context";

export default function Startgamepanel({ tellServer }) {
  const [gamestate] = useContext(GameStateContext);

  let filledSeats = 0;
  for (let i = 1; i < 9; i++) {
    if (gamestate[i].seatfilled === true) {
      filledSeats++;
    }
  }

  const startGame = () => {
    tellServer("startGame");
  };

  return (
    <>
      <h1>There are currently {filledSeats} of 8 players ready to play</h1>
      <Button onClick={startGame}>Start Game</Button>
    </>
  );
}
