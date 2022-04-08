import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";

export default function Chatcontrols({ chatSubmit }) {
  const [inputfieltext, updateinputtext] = useState("");

  const recordchange = (event) => {
    updateinputtext(event.target.value);
  };

  const newmessage = (e) => {
    e.preventDefault();
    chatSubmit(inputfieltext);
    updateinputtext("");

    // const newseats = { ...seats }
    // newseats[id].seatfilled = true
    // newseats[id].username = inputfieltext
    // updateSeat(newseats)
  };

  return (
    <Row>
      <Form className="w-100" onSubmit={newmessage}>
        <input
          type="textarea"
          style={{ width: "80%", height: "100%" }}
          value={inputfieltext}
          onChange={recordchange}
        ></input>
        <Button type="submit" style={{ width: "20%" }}>
          Submit Chat
        </Button>
      </Form>
    </Row>
  );
}
