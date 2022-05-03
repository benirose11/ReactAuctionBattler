import React from "react";
// import { Card } from "react-bootstrap";
import "../components.css";

function Card(props) {
  return <div className={`card ${props.className}`}>{props.children}</div>;
}
export default Card;
