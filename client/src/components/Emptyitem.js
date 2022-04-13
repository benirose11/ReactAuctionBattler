import { Col, Row } from "react-bootstrap";
import "./components.css";

export default function Emptyitem() {
  return (
    <Row className="emptyitem">
      <Col>
        <div className="draftedguytextfields">Name:</div>
        <div className="draftedguytextfields">HP:</div>
        <div className="draftedguytextfields">Damage Type: </div>
        <div className="draftedguytextfields">Damage: </div>
        <div className="draftedguytextfields">Special Ability:</div>
      </Col>
    </Row>
  );
}
