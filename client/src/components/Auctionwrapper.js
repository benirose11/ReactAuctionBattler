import React from "react";
import { Row, Col } from "react-bootstrap";
import Auctionblock from "./Auctionblock";
import Startgamepanel from "./Startgamepanel";
import "./components.css";

export default function Auctionwrapper({ tellServer, seats }) {
  return (
    <Row className="auctionwrapper">
      <Col
        style={{
          height: "100%",
          border: "2px solid black",
        }}
      >
        {seats.global.gamePhase == "notStarted" ? (
          <Startgamepanel
            tellServer={tellServer}
            seats={seats}
          ></Startgamepanel>
        ) : (
          <Auctionblock seats={seats}></Auctionblock>
        )}
      </Col>
    </Row>
  );
}
