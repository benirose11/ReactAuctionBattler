import React, { useState, useEffect, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import io from "socket.io-client";
import { useCookies } from "react-cookie";
import Playercolumn from "./Playercolumn";
import Centercolumn from "./Centercolumn";
import LoginSplashPage from "./LoginSplashPage";
import UserNamePanel from "./UserNamePanel";
import { GameStateContext } from "../context/context";

import "./components.css";

let socket;
const CONNECTION_PORT = "localhost:8000";

// const socket = io.connect("http://localhost8000");

function App() {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userName, setUserName] = useState("");

  const [gamestate, setGameState] = useContext(GameStateContext);

  const [chatboxmessages, updateChat] = useState([]);

  const log = (text, username = "unknown", timeout) => {
    const newmessage = username + " : " + text;
    updateChat((prevState) => {
      return [...prevState, newmessage];
    });
    if (timeout) {
      setTimeout(() => {
        updateChat((prevState) => {
          return prevState.pop();
        });
      }, timeout);
    }
  };

  // use Effect runs on every render, if second param [] is included, only runs when the item in second param changes.
  useEffect(() => {
    socket = io(CONNECTION_PORT);
    socket.on("message", (text, username = "Server", timeout = false) =>
      log(text, username, timeout)
    );

    socket.on("updatedStateFromServer", (gameState) => {
      setGameState(gameState);
    });

    socket.on("clearChat", () => {
      updateChat([]);
    });

    if (!cookies.Seat) {
      setCookie("Seat", 9);
    }

    socket.emit("getInitialSeating");
  }, [CONNECTION_PORT]);

  const updateSeat = (updatedSeating) => {
    socket.emit("SandLatestSeatingToServer", updatedSeating);
  };

  // const SendNewGameStateToServer = (updatedGameState) => {
  //   socket.emit("SandLatestSeatingToServer", updatedGameState);
  // };

  const resetGame = (playername) => {
    socket.emit("Reset", playername);
  };

  const bid = () => {
    socket.emit("bid", cookies.Seat);
  };

  const chatSubmit = (chatText) => {
    socket.emit("newChat", cookies.Name, chatText);
  };

  const tellServer = (serverMessage) => {
    socket.emit(serverMessage);
  };

  return (
    <Row fluid className="App">
      {cookies.Name ? (
        <Col className="red">
          <Row fluid className="usernamerow">
            <UserNamePanel
              cookies={cookies}
              removeCookie={removeCookie}
              resetGame={resetGame}
            ></UserNamePanel>
          </Row>
          <Row fluid className="playarearow">
            <Playercolumn
              seatblock={0}
              updateSeat={updateSeat}
              cookies={cookies}
              setCookie={setCookie}
            />
            <Centercolumn
              tellServer={tellServer}
              chatboxmessages={chatboxmessages}
              updateChat={updateChat}
              chatSubmit={chatSubmit}
              bid={bid}
            />
            <Playercolumn
              seatblock={4}
              updateSeat={updateSeat}
              cookies={cookies}
              setCookie={setCookie}
            />
          </Row>
        </Col>
      ) : (
        <LoginSplashPage
          cookieobj={cookies}
          setCookie={setCookie}
          userName={userName}
          setUserName={setUserName}
        />
      )}
    </Row>
  );
}

export default App;
