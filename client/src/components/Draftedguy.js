import { Col } from "react-bootstrap";
import "./auctionitem.css";

export default function Draftedguy({ draftedguy }) {
  return (
    <Col className="itemwrapper">
      <h3>{draftedguy.name}</h3>
      <div>HP: {draftedguy.hp}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Special Ability: {draftedguy.abilityname}</div>
    </Col>
  );
}
