import React, { useState } from "react";

function LoginSplashPage(props) {
  const [name, setName] = useState("");
  const handle = () => {
    props.setCookie("Name", name, { path: "/" });
    props.setUserName(name);
  };

  return (
    <div className="App">
      <h1>Welcome to React Auction Battler by Beni Rose</h1>
      <h2>Choose a unique user name:</h2>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <button onClick={handle}>Set Username</button>
      </div>
    </div>
  );
}

export default LoginSplashPage;
