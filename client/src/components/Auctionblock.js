import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionitem from "./Auctionitem";
import Emptyitem from "./Emptyitem";

export default function Auctionblock({ seats }) {
  return (
    <Row
      style={{
        height: "25%",
        border: "2px solid black",
      }}
    >
      {seats.global.guyontheblock[0] ? (
        <Auctionitem seats={seats} />
      ) : (
        <Emptyitem />
      )}
    </Row>
  );
}
