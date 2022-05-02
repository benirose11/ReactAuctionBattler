import React from "react";
import { Col, Row } from "react-bootstrap";
import "./components.css";

export default function Drafguyinfofield({ fieldname, fieldtext }) {
  return (
    <Row className="draftguyinfofieldrow">
      <Col className="draftguyinfoname">{fieldname}</Col>
      <Col className="draftguyinfocontent">{fieldtext}</Col>
    </Row>
  );
}
