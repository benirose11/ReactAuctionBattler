import "./usernamepanel.css";

import { Button, Col } from "react-bootstrap";
import Card from "../Card";

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
    <Col className="usernamewrapper align-self-center col-3">
      <div className="row">
        <Col className="col-6 text-center">
          <div>Loggen in as: {cookies.Name}</div>
          <Button id="usernamePanelButtons" onClick={resetUsername}>
            Reset User Name
          </Button>
        </Col>
        <Col className="col-6 text-center">
          <div>Current seat: {cookies.Seat}</div>
          <Button id="usernamePanelButtons" onClick={resGame}>
            Reset Seats and Game
          </Button>
        </Col>
      </div>
    </Col>
  );
}
