import React from "react";
import { Col } from "react-bootstrap";
import Chatwrapper from "./Chatwrapper";
import Auctionwrapper from "./Auctionwrapper";

export default function Centercolumn({
  chatboxmessages,
  updateChat,
  chatSubmit,
  tellServer,
  seats,
}) {
  return (
    <Col fluid md={4}>
      <Chatwrapper
        chatboxmessages={chatboxmessages}
        updateChat={updateChat}
        chatSubmit={chatSubmit}
      />
      <Auctionwrapper tellServer={tellServer} seats={seats} />
    </Col>
  );
}
