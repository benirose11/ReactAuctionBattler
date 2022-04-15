import React, { useContext, useState } from "react";
import "./components.css";
import Emptyitem from "./Emptyitem";
import Draftedguy from "./Draftedguy";
import { Row, Col, Button } from "react-bootstrap";
import { GameStateContext } from "../context/context";
import Submitrosterarea from "./Submitrosterarea";

export default function Filledseat({ id, tellServer, cookies }) {
  let displayofguys = [];
  const [gamestate, setGameState] = useContext(GameStateContext);

  let drafted = gamestate[id].draftedguys;
  let selected = gamestate[id].selectedguys;

  const select = (index) => {
    if (drafted[index]["selected"]) {
      let newguys = [...drafted];
      newguys[index]["selected"] = false;
      drafted = newguys;
      let newgamestate = { ...gamestate };
      newgamestate[id].draftedguys = drafted;
      let newselected = [];
      selected.forEach((selectedguy) => {
        if (selectedguy.selected) newselected.push(selectedguy);
      });
      newgamestate[id].selectedguys = newselected;

      setGameState(newgamestate);
      console.log(newgamestate[id]);
    } else {
      let newguys = [...drafted];
      newguys[index]["selected"] = true;
      drafted = newguys;
      let selectedguy = newguys[index];
      selectedguy["indexid"] = index;

      let newgamestate = { ...gamestate };
      newgamestate[id].draftedguys = drafted;
      newgamestate[id].selectedguys.push(selectedguy);

      setGameState(newgamestate);
    }
  };

  const submitRoster = () => {
    let newgamestate = { ...gamestate };
    newgamestate[id]["submitted"] = true;
    console.log(newgamestate);
    tellServer("sendLatestSeatingToServer", newgamestate);
    tellServer("rosterSubmitted", id);
  };

  for (let i = 0; i < 8; i++) {
    if (drafted[i]) {
      const variableStyle = {
        backgroundColor: drafted[i]["selected"] ? "rgb(16, 225, 16)" : "wheat",
        border: drafted[i]["selected"] ? "2px solid black" : "1px solid black",
      };

      displayofguys.push(
        <Col sm={1.5} style={variableStyle} key={i} className="itemwrapper">
          <Draftedguy
            draftedguy={drafted[i]}
            select={select}
            index={i}
            id={id}
            cookies={cookies}
          ></Draftedguy>{" "}
        </Col>
      );
    } else {
      displayofguys.push(
        <Col sm={1.5} className="itemwrapper">
          <Emptyitem></Emptyitem>
        </Col>
      );
    }
  }

  return (
    <Col fluid className="filledseat">
      <Row fluid className="filledseatinforow">
        <Col>
          <h3>
            Seat {id} : {gamestate[id].username}
          </h3>
          <h2>Funds Remaining $ {gamestate[id].bank}</h2>
        </Col>
        <Col>
          {(selected.length == gamestate.global.guystobeplayed) &
          !gamestate[id]["submitted"] ? (
            <Button id="submitrosterbutton" onClick={submitRoster}>
              Submit Roster
            </Button>
          ) : (
            <Submitrosterarea id={id} cookies={cookies}></Submitrosterarea>
          )}
        </Col>
      </Row>
      <Row fluid className="filledseatinforow"></Row>
      <Row fluid className="draftedguyrow">
        {displayofguys}
      </Row>
    </Col>
  );
}
