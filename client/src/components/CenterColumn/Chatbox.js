import React from "react";
import { Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
uuidv4();

export default function Chatbox({ chatboxmessages, updateChat }) {
  const latest10messages = chatboxmessages.slice(-10);
  let messagelist = [];
  latest10messages.forEach((chat) => {
    messagelist.push(<li key={uuidv4()}>{chat}</li>);
  });

  return (
    <Row style={{ height: "85%", fontSize: "1.5vh" }}>
      <div className="d-flex felx-column flex-grow-1">
        <div className="flex-grow-1 overflow-auto">
          <div className="h-100 d-flex flex-column align-items-start justify-content-end px-3">
            {messagelist}
          </div>
        </div>
      </div>
    </Row>
  );
}
