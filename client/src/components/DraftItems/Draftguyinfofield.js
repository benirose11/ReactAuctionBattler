import React from "react";
import { Col, Row } from "react-bootstrap";
import classes from "./draftitems.module.css";

export default function Drafguyinfofield({ fieldname, fieldtext }) {
  // let specialabilitysstyling = "";
  // if (fieldname === "Special Ability") {
  //   specialabilitysstyling = "flex-grow-1";
  // }

  return (
    <Row className={`${classes.draftguyinfofieldrow}`}>
      <Col className={`col-4 ${classes.draftguyinfoname}`}>{fieldname}</Col>

      <Col className={`col-8 ${classes.draftguyinfocontent}`}>{fieldtext}</Col>
    </Row>
  );
}
