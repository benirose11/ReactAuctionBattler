import { Button } from "react-bootstrap";

export default function Startgamepanel({ seats, tellServer }) {
  let filledSeats = 0;
  for (let i = 1; i < 9; i++) {
    if (seats[i].seatfilled == true) {
      filledSeats++;
    }
  }

  const startGame = () => {
    tellServer("startGame");
  };

  return (
    <div>
      <h1>There are currently {filledSeats} of 8 players ready to play</h1>
      <Button onClick={startGame}>Start Game</Button>
    </div>
  );
}
