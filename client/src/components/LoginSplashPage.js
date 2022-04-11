import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

function LoginSplashPage(props) {
  const [name, setName] = useState("");
  const handle = () => {
    props.setCookie("Name", name, { path: "/" });
    props.setUserName(name);
  };

  return (
    <Col className="splashpage">
      <Row>Welcome to React Auction Battler by Beni Rose</Row>
      <Row>Choose a unique user name:</Row>
      <Row>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div>
          <button onClick={handle}>Set Username</button>
        </div>
      </Row>
    </Col>
  );
}

export default LoginSplashPage;
