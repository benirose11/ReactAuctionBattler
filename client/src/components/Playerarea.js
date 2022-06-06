import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import Emptyseat from "./Emptyseat";
import Filledseat from "./Filledseat";
import { GameStateContext } from "../context/context";
import "./components.css";

export default function Playerarea({
  id,
  seats,
  updateSeat,
  cookies,
  setCookie,
  tellServer,
}) {
  const [gamestate] = useContext(GameStateContext);

  return (
    <Row fluid className="playerAreaRow">
      {gamestate[id].seatfilled ? (
        <Filledseat id={id} tellServer={tellServer} cookies={cookies} />
      ) : (
        <Emptyseat
          updateSeat={updateSeat}
          seats={seats}
          id={id}
          cookies={cookies}
          setCookie={setCookie}
          tellServer={tellServer}
        />
      )}
    </Row>
  );
}
