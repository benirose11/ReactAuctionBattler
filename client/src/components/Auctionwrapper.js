import React from "react";
import { Row, Col } from "react-bootstrap";
import Auctionblock from "./Auctionblock";
import Startgamepanel from "./Startgamepanel";
import "./components.css";
import Auctioncontrols from "./Auctioncontrols";

export default function Auctionwrapper({ tellServer, seats, bid }) {
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

        <Auctioncontrols seats={seats} bid={bid}></Auctioncontrols>
      </Col>
    </Row>
  );
}
