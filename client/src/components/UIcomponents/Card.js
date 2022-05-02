import React from "react";
// import { Card } from "react-bootstrap";
import "../components.css";

function card(props) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
export default card;
