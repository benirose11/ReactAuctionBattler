import React, { useContext } from "react";
import "./components.css";
import Emptyitem from "./Emptyitem";
import Draftedguy from "./Draftedguy";
import { Row, Form, Button, Col } from "react-bootstrap";
import { GameStateContext } from "../context/context";

export default function Filledseat({ id }) {
  let displayofguys = [];
  const [gamestate, setGameState] = useContext(GameStateContext);

  let drafted = gamestate[id].draftedguys;
  for (let i = 0; i < 8; i++) {
    if (drafted[i]) {
      displayofguys.push(
        <Col fluid className="drafteditemwrapper">
          <Draftedguy draftedguy={drafted[i]}></Draftedguy>{" "}
        </Col>
      );
    } else {
      displayofguys.push(
        <Col fluid className="itemwrapper">
          <Emptyitem></Emptyitem>
        </Col>
      );
    }
  }

  return (
    <Col fluid className="filledseat">
      <Row fluid className="filledseatinforow">
        <h1>
          Seat {id} : {gamestate[id].username}
        </h1>
      </Row>
      <Row fluid className="filledseatinforow">
        <h2>Funds Remaining $ {gamestate[id].bank}</h2>
      </Row>
      <Row fluid className="draftedguyrow">
        {displayofguys}
      </Row>
    </Col>
  );
}
