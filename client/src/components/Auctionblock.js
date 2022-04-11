import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionitem from "./Auctionitem";
import Emptyitem from "./Emptyitem";
import { GameStateContext } from "../context/context";

export default function Auctionblock() {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row
      style={{
        height: "25%",
        border: "2px solid black",
      }}
    >
      <Col>
        <Row>
          {gamestate.global.guyontheblock[0] ? <Auctionitem /> : <Emptyitem />}
        </Row>
      </Col>
    </Row>
  );
}
