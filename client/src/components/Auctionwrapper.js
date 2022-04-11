import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionblock from "./Auctionblock";
import Startgamepanel from "./Startgamepanel";
import "./components.css";
import Auctioncontrols from "./Auctioncontrols";
import { GameStateContext } from "../context/context";

export default function Auctionwrapper({ tellServer, bid }) {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row className="auctionwrapper">
      <Col
        style={{
          height: "100%",
          border: "2px solid black",
        }}
      >
        {gamestate.global.gamePhase == "notStarted" ? (
          <Startgamepanel tellServer={tellServer}></Startgamepanel>
        ) : (
          <Auctionblock></Auctionblock>
        )}

        <Auctioncontrols bid={bid}></Auctioncontrols>
      </Col>
    </Row>
  );
}
