import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionblock from "./Auctionblock";
// import "../components.css";
import Auctioncontrols from "./Auctioncontrols";
import classes from "./centercolumn.module.css";
import { GameStateContext } from "../../context/context";

export default function Auctionwrapper({ tellServer, bid }) {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row className={classes.auctionwrapper}>
      <Col
        style={{
          height: "100%",
          border: "1px solid black",
        }}
      >
        <Auctionblock></Auctionblock>

        <Auctioncontrols bid={bid}></Auctioncontrols>
      </Col>
    </Row>
  );
}
