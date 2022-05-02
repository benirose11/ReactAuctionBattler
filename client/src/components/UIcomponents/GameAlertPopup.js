import React from "react";
// import "../components.css";
import "./AlertPopup.css";
import card from "./Card";
import Button from "react-bootstrap";

const GameAlertPopup = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button>Dismiss</Button>
        </footer>
      </card>
    </div>
  );
};

export default GameAlertPopup;
