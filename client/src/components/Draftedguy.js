import React from "react";
import { Col, Button } from "react-bootstrap";
import "./components.css";
import { useContext } from "react";
import { GameStateContext } from "../context/context";
import Draftguyinfofield from "./Draftguyinfofield";

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
      {buttonrender ? (
        <Button onClick={selectwithindex}>{buttontext}</Button>
      ) : null}
      <div>{draftedguy.name}</div>
      <div>Damage Type: {draftedguy.damagetype}</div>
      <div>Damage: {draftedguy.damage}</div>
      <div>Defense: {draftedguy.defense}</div>
      <div>Special Ability: {draftedguy.ability.abilityname}</div>
    </Col>
  );
}

// <Draftguyinfofield fieldname={draftedguy.name}></Draftguyinfofield>
//       <Draftguyinfofield
//         fieldname={"Defense"}
//         fieldtext={draftedguy.defense}
//       ></Draftguyinfofield>
//       <Draftguyinfofield
//         fieldname={"Damage Type"}
//         fieldtext={draftedguy.damagetype}
//       ></Draftguyinfofield>
//       <Draftguyinfofield
//         fieldname={"Damage"}
//         fieldtext={draftedguy.damage}
//       ></Draftguyinfofield>
//       <Draftguyinfofield
//         fieldname={"Ability"}
//         fieldtext={draftedguy.ability.abilityname}
//       ></Draftguyinfofield>
