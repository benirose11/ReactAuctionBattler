import { Col } from "react-bootstrap";
import "./components.css";

export default function Draftedguy({ draftedguy }) {
  return (
    <Col className="draftitem">
      <div>{draftedguy.name}</div>
      <div>HP: {draftedguy.hp}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Special Ability: {draftedguy.abilityname}</div>
    </Col>
  );
}
