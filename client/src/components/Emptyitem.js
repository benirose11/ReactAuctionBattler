import { Col } from "react-bootstrap";
import "./components.css";

export default function Emptyitem() {
  return (
    <Col className="emptyitem">
      <div className="draftedguytextfields">Name:</div>
      <div className="draftedguytextfields">HP:</div>
      <div className="draftedguytextfields">Damage Type: </div>
      <div className="draftedguytextfields">Damage: </div>
      <div className="draftedguytextfields">Special Ability:</div>
    </Col>
  );
}
