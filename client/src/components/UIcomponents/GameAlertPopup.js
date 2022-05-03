import React from "react";
import "./AlertPopup.css";
import { Button } from "react-bootstrap";
import Card from "./Card";

const GameAlertPopup = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <Card className="modal">
        <header className="header">
          <h2>I am the title</h2>
        </header>
        <div className="content">
          <p>I am the content</p>
        </div>
        <footer className="actions">
          <Button>Dismiss</Button>
        </footer>
      </Card>
    </div>
  );
};

export default GameAlertPopup;
