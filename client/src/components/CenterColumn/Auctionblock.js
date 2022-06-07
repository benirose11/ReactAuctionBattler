import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import Auctionitem from "../../components/DraftItems/Auctionitem";
import Emptyitem from "../DraftItems/Emptyitem";
import { GameStateContext } from "../../context/context";
import classes from "./centercolumn.module.css";

export default function Auctionblock() {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row className={classes.auctionBlock}>
      <Col className={`${classes.auctionItemWrapper}`}>
        {gamestate.global.guyontheblock[0] ? <Auctionitem /> : <Emptyitem />}
      </Col>
    </Row>
  );
}
