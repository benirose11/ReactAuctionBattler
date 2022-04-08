import { Row, Col } from "react-bootstrap";
import "./auctionitem.css";

export default function Auctionitem({ seats }) {
  return (
    <Col className="itemwrapper">
      <h3>{seats.global.guyontheblock[0].name}</h3>
      <div>HP: {seats.global.guyontheblock[0].hp}</div>
      <div>Damage Type: {seats.global.guyontheblock[0].damagetype}</div>
      <div>Damage: {seats.global.guyontheblock[0].damage}</div>
      <div>
        Special Ability: {seats.global.guyontheblock[0].ability.abilityname}
      </div>
    </Col>
  );
}
