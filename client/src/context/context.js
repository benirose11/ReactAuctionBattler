import React, { useState, createContext } from "react";

export const GameStateContext = createContext();

export const GameStateProvider = (props) => {
  const bank = 100;
  const gamesize = 8;
  const [gamestate, setGameState] = useState({
    1: { seatfilled: false, draftedguys: [], username: "", bank },
    2: { seatfilled: false, draftedguys: [], username: "", bank },
    3: { seatfilled: false, draftedguys: [], username: "", bank },
    4: { seatfilled: false, draftedguys: [], username: "", bank },
    5: { seatfilled: false, draftedguys: [], username: "", bank },
    6: { seatfilled: false, draftedguys: [], username: "", bank },
    7: { seatfilled: false, draftedguys: [], username: "", bank },
    8: { seatfilled: false, draftedguys: [], username: "", bank },
    global: {
      gamePhase: "notStarted",
      players: {},
      warriorlist: [],
      turnorder: [],
      maxbid: 1,
      guyontheblock: [],
      gamesize,
      winningseat: null,
    },
  });

  return (
    <GameStateContext.Provider value={[gamestate, setGameState]}>
      {props.children}
    </GameStateContext.Provider>
  );
};
