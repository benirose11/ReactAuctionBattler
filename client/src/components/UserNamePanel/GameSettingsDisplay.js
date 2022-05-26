import { Row, Col } from "react-bootstrap";
import Card from "../Card";

const GameSettingsDisplay = ({ gamestate, settingsModal }) => {
  return (
    <>
      <div className="gameSettingsDisplay">
        <Col className="align-self-center">
          <Row id="gameSettingsTitle">Current Game Settings</Row>
          <Row>Draft Budget: {gamestate.global.bank}</Row>
          <Row>Roster Size: {gamestate.global.gamesize}</Row>
          <Row>Roster Slots for Battle: {gamestate.global.guystobeplayed}</Row>
          <Row>Bid Timer Countdown: {gamestate.global.countdown}</Row>
        </Col>
      </div>

      <button onClick={settingsModal} id="settingsButton" />
    </>
  );
};

export default GameSettingsDisplay;
