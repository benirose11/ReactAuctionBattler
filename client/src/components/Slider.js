import { Row, Col } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { GameStateContext } from "../context/context";
import "./SettingsPopup.css";

export default function Slider({
  label,
  minval,
  maxval,
  setGameSettings,
  gameSettings,
  gameStateKey,
}) {
  const [gamestate] = useContext(GameStateContext);

  const defaultVal = gamestate.global[gameStateKey];
  const [curInputVal, setCurInputVal] = useState(defaultVal);

  if (label === "Guys to be played") {
    if (curInputVal > maxval) {
      setCurInputVal(maxval);
      setGameSettings(() => {
        let newstate = { ...gameSettings };
        newstate[gameStateKey] = maxval;

        return newstate;
      });
    }
  }

  useEffect(() => {
    setCurInputVal(defaultVal);
  }, [defaultVal, gamestate]);

  const updateSettingState = (event) => {
    setCurInputVal(parseInt(event.target.value));
    setGameSettings(() => {
      let newstate = { ...gameSettings };
      newstate[gameStateKey] = parseInt(event.target.value);
      if (newstate["gamesize"] < newstate["guystobeplayed"])
        newstate["guystobeplayed"] = newstate["gamesize"];

      return newstate;
    });
  };

  return (
    <Row className={"settingsrow"}>
      <Col className={"labelcol"}>
        <label htmlfor={label}>{label}</label>
      </Col>
      <Col className={"slidercol"}>
        <div class="range-wrap">
          <span>{`${minval}   `}</span>
          <input
            type="range"
            min={minval}
            max={maxval}
            name={label}
            defaultValue={defaultVal}
            onChange={updateSettingState}
            class="range"
          ></input>
          <output for={label} class="bubble"></output>
          <span>{`   ${maxval}`}</span>
        </div>
      </Col>
      <Col className={"curvalcol"}>{curInputVal}</Col>
    </Row>
  );
}
