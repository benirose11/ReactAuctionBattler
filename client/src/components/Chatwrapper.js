import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import Chatbox from "./Chatbox";
import Chatcontrols from "./Chatcontrols";
import "./components.css";

export default function Chatwrapper({
  chatboxmessages,
  updateChat,
  chatSubmit,
}) {
  return (
    <Row className="chatwrapper">
      <Col
        style={{
          border: "2px solid black",
        }}
      >
        <Chatbox chatboxmessages={chatboxmessages} updateChat={updateChat} />
        <Chatcontrols chatSubmit={chatSubmit} />
      </Col>
    </Row>
  );
}
