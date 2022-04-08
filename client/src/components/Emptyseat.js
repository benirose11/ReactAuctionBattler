import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Emptyseat({
  id,
  updateSeat,
  seats,
  setCookie,
  cookies,
}) {
  // const [inputfieltext, updateinputtext] = useState("");

  // const recordchange = (event) => {
  //   updateinputtext(event.target.value);
  // };

  const seatselect = (e) => {
    e.preventDefault();
    // updateinputtext("");
    const oldseat = cookies.Seat ? cookies.Seat : 9;
    const newseats = { ...seats };
    newseats[id].seatfilled = true;
    newseats[id].username = cookies.Name;
    if (oldseat != 9 && oldseat != id) {
      newseats[oldseat].seatfilled = false;
    }
    setCookie("Seat", id);
    updateSeat(newseats);
  };

  return (
    <Form onSubmit={seatselect}>
      <Form.Group>
        <Form.Label>Seat {id}</Form.Label>
        <br></br>

        <Button type="Submit">Take Seat {id}</Button>
      </Form.Group>
    </Form>
  );
}
