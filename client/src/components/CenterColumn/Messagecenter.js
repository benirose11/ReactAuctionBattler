import "../components.css";
import { Row } from "react-bootstrap";
import { useContext } from "react";
import { GameStateContext } from "../../context/context";

export default function Messagecenter() {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row className="messagecenter">
      <h1>The current game phase is {gamestate.global.gamePhase}</h1>
    </Row>
  );
}
