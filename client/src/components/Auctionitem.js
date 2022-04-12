import { Col } from "react-bootstrap";
import { useContext } from "react";
import { GameStateContext } from "../context/context";

export default function Auctionitem() {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Col className="itemwrapper">
      <h3>{gamestate.global.guyontheblock[0].name}</h3>
      <div>HP: {gamestate.global.guyontheblock[0].hp}</div>
      <div>Damage Type: {gamestate.global.guyontheblock[0].damagetype}</div>
      <div>Damage: {gamestate.global.guyontheblock[0].damage}</div>
      <div>
        Special Ability: {gamestate.global.guyontheblock[0].ability.abilityname}
      </div>
    </Col>
  );
}
