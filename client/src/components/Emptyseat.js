import React, { useContext } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./components.css";
import { GameStateContext } from "../context/context";

export default function Emptyseat({ id, setCookie, cookies, updateSeat }) {
  const [gamestate] = useContext(GameStateContext);

  const seatselect = (e) => {
    e.preventDefault();
    const oldseat = cookies.Seat ? cookies.Seat : 9;

    const newseats = { ...gamestate };
    console.log(oldseat);
    console.log(newseats);
    newseats[id].seatfilled = true;
    newseats[id].username = cookies.Name;
    if (oldseat != 9 && oldseat != id) {
      newseats[oldseat].seatfilled = false;
    }
    setCookie("Seat", id);

    updateSeat(newseats);
  };

  return (
    <Col className="emptyseat">
      <Form onSubmit={seatselect}>
        <Form.Group>
          <Form.Label>Seat {id}</Form.Label>
          <br></br>

          <Button className="seatselectbutton" type="Submit" size="lg">
            Take Seat {id}
          </Button>
        </Form.Group>
      </Form>
    </Col>
  );
}
