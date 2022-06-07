// import "./usernamepanel.css";
import classes from "./usernamepanel.module.css";

import { Col } from "react-bootstrap";

export default function UserNameAndSeatDisplay({
  cookies,
  resetGame,
  removeCookie,
}) {
  const resGame = () => {
    resetGame(cookies.Name);
  };

  const resetUsername = () => {
    removeCookie("Name");
  };
  return (
    <Col className={`${classes.usernamewrapper} align-self-center col-3`}>
      <div className="row">
        <Col className="col-6 text-center">
          <div>Logged in as: {cookies.Name}</div>
          <button
            className={classes.usernamePanelButtons}
            onClick={resetUsername}
          >
            Reset User Name
          </button>
        </Col>
        <Col className="col-6 text-center">
          <div>
            Current seat: {cookies.Seat == 9 ? "Unseated" : cookies.Seat}
          </div>
          <button className={classes.usernamePanelButtons} onClick={resGame}>
            Reset Seats and Game
          </button>
        </Col>
      </div>
    </Col>
  );
}
