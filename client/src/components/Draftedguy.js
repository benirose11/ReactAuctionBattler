import React from "react";
import { Col, Button } from "react-bootstrap";
import "./components.css";
import { useState, useContext } from "react";
import { GameStateContext } from "../context/context";

export default function Draftedguy({ draftedguy, index, select }) {
  const [gamestate] = useContext(GameStateContext);

  const selectwithindex = () => {
    select(index);
  };

  return (
    <Col className="draftitem">
      <div>{draftedguy.name}</div>
      <div>HP: {draftedguy.hp}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Special Ability: {draftedguy.abilityname}</div>

      {gamestate.global.gamePhase === "selecting" && (
        <Button onClick={selectwithindex}>Select for Battle</Button>
      )}
    </Col>
  );
}
