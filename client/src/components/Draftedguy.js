import React from "react";
import { Col, Button } from "react-bootstrap";
import "./components.css";
import { useState, useContext } from "react";
import { GameStateContext } from "../context/context";

export default function Draftedguy({ draftedguy, index, select, id, cookies }) {
  const [gamestate] = useContext(GameStateContext);
  let buttontext = "Add to Battle Roster";
  if (draftedguy.selected) buttontext = "Remove from Battle Roster";
  let buttonrender = false;
  if (
    gamestate.global.gamePhase === "selecting" &&
    (cookies.Seat == id) & !gamestate[id]["submitted"]
  ) {
    buttonrender = true;
  }

  const selectwithindex = () => {
    select(index);
  };

  return (
    <Col className="draftitem">
      <div>{draftedguy.name}</div>
      <div>Defense: {draftedguy.defense}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Special Ability: {draftedguy.abilityname}</div>

      {buttonrender ? (
        <Button onClick={selectwithindex}>{buttontext}</Button>
      ) : null}
    </Col>
  );
}
