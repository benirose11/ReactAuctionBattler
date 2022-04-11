import React, { useState, useContext } from "react";
import { Row } from "react-bootstrap";
import Emptyseat from "./Emptyseat";
import Filledseat from "./Filledseat";
import { GameStateContext } from "../context/context";
export default function Playerarea({
  id,
  seats,
  updateSeat,
  cookies,
  setCookie,
}) {
  const [gamestate, setGameState] = useContext(GameStateContext);

  return (
    <Row
      fluid
      style={{
        height: "25%",
        border: "2px solid black",
      }}
    >
      {gamestate[id].seatfilled ? (
        <Filledseat id={id} />
      ) : (
        <Emptyseat
          updateSeat={updateSeat}
          seats={seats}
          id={id}
          cookies={cookies}
          setCookie={setCookie}
        />
      )}
    </Row>
  );
}
