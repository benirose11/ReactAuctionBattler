import React from "react";
import { Col } from "react-bootstrap";
import Playerarea from "./Playerarea";

export default function Playercolumn(props) {
  let playercolarray = [];
  for (let i = 1; i < 5; i++) {
    playercolarray.push(
      <Playerarea
        id={props.seatblock + i}
        seats={props.seats}
        updateSeat={props.updateSeat}
        cookies={props.cookies}
        setCookie={props.setCookie}
      />
    );
  }

  return (
    <Col
      fluid
      md={4}
      style={{
        border: "2px solid black",
      }}
    >
      {playercolarray}
    </Col>
  );
}

{
  /* <Playerarea
id={props.seatblock + 1}
seats={props.seats}
updateSeat={props.updateSeat}
cookies={props.cookies}
/>
<Playerarea
id={props.seatblock + 2}
seats={props.seats}
updateSeat={props.updateSeat}
/>
<Playerarea
id={props.seatblock + 3}
seats={props.seats}
updateSeat={props.updateSeat}
/>
<Playerarea
id={props.seatblock + 4}
seats={props.seats}
updateSeat={props.updateSeat}
/> */
}
