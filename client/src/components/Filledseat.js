import React from "react";
import "./auctionitem.css";
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
        <Col className="itemwrapper">
          <Draftedguy draftedguy={drafted[i]}></Draftedguy>{" "}
        </Col>
      );
    } else {
      displayofguys.push(
        <Col className="itemwrapper">
          <Emptyitem className="draftedguy"></Emptyitem>
        </Col>
      );
    }
  }

  return (
    <Col>
      <Row>
        <h1>
          Seat {id} : {seats[id].username}
        </h1>
      </Row>
      <Row>
        <h2>Funds Remaining $ {seats[id].bank}</h2>
        <button onClick={bid}>Bid</button>
      </Row>
      <Row>{displayofguys}</Row>
    </Col>
  );
}
