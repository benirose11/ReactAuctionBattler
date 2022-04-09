import React from "react";
import "./components.css";
import Emptyitem from "./Emptyitem";
import Draftedguy from "./Draftedguy";
import { Row, Form, Button, Col } from "react-bootstrap";

export default function Filledseat({ id, cookies, seats }) {
  const bid = () => {
    console.log(id + " bid");
  };

  let displayofguys = [];

  let drafted = seats[id].draftedguys;
  for (let i = 0; i < 8; i++) {
    if (drafted[i]) {
      displayofguys.push(
        <Col fluid className="drafteditemwrapper">
          <Draftedguy draftedguy={drafted[i]}></Draftedguy>{" "}
        </Col>
      );
    } else {
      displayofguys.push(
        <Col fluid className="itemwrapper">
          <Emptyitem></Emptyitem>
        </Col>
      );
    }
  }

  return (
    <Col fluid className="filledseat">
      <Row fluid className="filledseatinforow">
        <h1>
          Seat {id} : {seats[id].username}
        </h1>
      </Row>
      <Row fluid className="filledseatinforow">
        <h2>Funds Remaining $ {seats[id].bank}</h2>
        <button onClick={bid}>Bid</button>
      </Row>
      <Row fluid className="draftedguyrow">
        {displayofguys}
      </Row>
    </Col>
  );
}
