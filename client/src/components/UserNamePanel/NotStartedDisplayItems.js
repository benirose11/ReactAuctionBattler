import classes from "./usernamepanel.module.css";

export default function NotStartedDisplayItems({ filledSeats, tellServer }) {
  const startGame = () => {
    tellServer("startGame");
  };

  return (
    <>
      <div>There are currently {filledSeats} of 8 players ready to play</div>
      <div>
        <button onClick={startGame} className={`${classes.startGameButton}`}>
          Start Game
        </button>
      </div>
    </>
  );
}

// className={classes.startGameButton}
