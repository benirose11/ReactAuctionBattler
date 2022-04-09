import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Emptyseat from "./Emptyseat";
import Filledseat from "./Filledseat";

export default function Playerarea({
  id,
  seats,
  updateSeat,
  cookies,
  setCookie,
}) {
  return (
    <Row
      fluid
      style={{
        height: "25%",
        border: "2px solid black",
      }}
    >
      {seats[id].seatfilled ? (
        <Filledseat id={id} seats={seats} cookies={cookies} />
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
