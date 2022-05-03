import React from "react";
import { Row, Col } from "react-bootstrap";
import "./components.css";

export default function SettingsPopup({ toggleModal }) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <Col>
          <Row>Adjust Game Settings</Row>
          <Row>Adjust PLayer Budget</Row>
          <Row>Adjust guys to be Draftet</Row>
          <Row>adjust guys to be played</Row>
          <Row>Adjust countdown time</Row>
          <Row>
            <button onClick={toggleModal}>Dismiss</button>
          </Row>
        </Col>
      </div>
    </div>
  );
}
