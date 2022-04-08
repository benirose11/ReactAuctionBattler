import { Row, Col } from "react-bootstrap";
import "./auctionitem.css";

export default function Emptyitem() {
  return (
    <Col className="draftedguy">
      <h3 className="draftedguytextfields">Name:</h3>
      <div className="draftedguytextfields">HP:</div>
      <div className="draftedguytextfields">Damage Type: </div>
      <div className="draftedguytextfields">Damage: </div>
      <div className="draftedguytextfields">Special Ability:</div>
    </Col>
  );
}
