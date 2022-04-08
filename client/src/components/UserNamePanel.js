function UserNamePanel(props) {
  const resetUsername = () => {
    props.removeCookie("Name");
  };

  const resetGame = () => {
    props.resetGame(props.cookies.Name);
  };

  return (
    <div>
      <h1>
        Your current user name is {props.cookies.Name} and your seat is{" "}
        {props.cookies.Seat}
      </h1>
      <button onClick={resetUsername}>Reset User Name</button>
      <button onClick={resetGame}>Reset Seats and Game</button>
    </div>
  );
}

export default UserNamePanel;
