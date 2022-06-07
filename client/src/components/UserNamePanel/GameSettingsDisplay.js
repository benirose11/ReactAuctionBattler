import { Row, Col } from "react-bootstrap";
import classes from "./usernamepanel.module.css";

const GameSettingsDisplay = ({ gamestate, settingsModal }) => {
  return (
    <>
      <div className={classes.gameSettingsDisplay}>
        <Col className="align-self-center">
          <Row className={classes.gameSettingsTitle}>Current Game Settings</Row>
          <Row>Draft Budget: {gamestate.global.bank}</Row>
          <Row>Roster Size: {gamestate.global.gamesize}</Row>
          <Row>Roster Slots for Battle: {gamestate.global.guystobeplayed}</Row>
          <Row>Bid Timer Countdown: {gamestate.global.countdown}</Row>
        </Col>
      </div>

      <button onClick={settingsModal} className={classes.settingsButton} />
    </>
  );
};

export default GameSettingsDisplay;
