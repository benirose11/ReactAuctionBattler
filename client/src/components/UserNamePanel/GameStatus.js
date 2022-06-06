import { Col } from "react-bootstrap";
import classes from "./usernamepanel.module.css";
import NotStartedDisplayItems from "./NotStartedDisplayItems";

const GameStatus = ({ gamestate, filledSeats, tellServer }) => {
  return (
    <div className={classes.gameStatusWrapper}>
      <Col className="text-center">
        <div className={classes.gameStatusTitle}>Game Status</div>
        <div>Game Phase: {gamestate.global.gamePhase}</div>
        {gamestate.global.gamePhase == "notStarted" && (
          <NotStartedDisplayItems
            filledSeats={filledSeats}
            tellServer={tellServer}
          ></NotStartedDisplayItems>
        )}
      </Col>
    </div>
  );
};

export default GameStatus;
