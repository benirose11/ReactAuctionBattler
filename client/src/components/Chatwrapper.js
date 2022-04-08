import React from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import Chatbox from "./Chatbox";
import Chatcontrols from "./Chatcontrols";

export default function Chatwrapper({
  chatboxmessages,
  updateChat,
  chatSubmit,
}) {
  return (
    <Row
      style={{
        height: "45vh",
      }}
    >
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
