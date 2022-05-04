import React, { useState, createContext } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = (props) => {
  const bank = 100;
  const gamesize = 8;
  const guystobeplayed = 4;
  const [gamestate, setGameState] = useState({
    1: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    2: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    3: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    4: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    5: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    6: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    7: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    8: {
      seatfilled: false,
      draftedguys: [],
      username: "",
      bank,
      selectedguys: [],
    },
    global: {
      bank: 100,
      countdown: 5,
      gamePhase: "notStarted",
      players: {},
      warriorlist: [],
      turnorder: [],
      maxbid: 1,
      guyontheblock: [],
      gamesize,
      guystobeplayed,
      winningseat: null,
      numberofrosterssubmitted: 0,
    },
  });

  return (
    <GameStateContext.Provider value={[gamestate, setGameState]}>
      {props.children}
    </GameStateContext.Provider>
  );
};
