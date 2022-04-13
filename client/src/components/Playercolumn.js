import React from "react";
import { Col } from "react-bootstrap";
import Playerarea from "./Playerarea";

export default function Playercolumn(props) {
  let playercolarray = [];
  for (let i = 1; i < 5; i++) {
    playercolarray.push(
      <Playerarea
        id={props.seatblock + i}
        seats={props.seats}
        updateSeat={props.updateSeat}
        cookies={props.cookies}
        setCookie={props.setCookie}
        tellServer={props.tellServer}
      />
    );
  }

  return (
    <Col
      fluid
      md={4}
      style={{
        border: "2px solid black",
      }}
    >
      {playercolarray}
    </Col>
  );
}
