import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionitem from "./Auctionitem";
import Emptyitem from "./Emptyitem";
import Auctioncontrols from "./Auctioncontrols";

export default function Auctionblock({ seats }) {
  return (
    <Row
      style={{
        height: "25%",
        border: "2px solid black",
      }}
    >
      <Col>
        <Row>
          {seats.global.guyontheblock[0] ? (
            <Auctionitem seats={seats} />
          ) : (
            <Emptyitem />
          )}
        </Row>
      </Col>
    </Row>
  );
}
