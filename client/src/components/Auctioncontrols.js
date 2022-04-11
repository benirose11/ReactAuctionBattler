import { Row, Col, Button } from "react-bootstrap";
import "./components.css";
import { useContext } from "react";
import { GameStateContext } from "../context/context";

export default function Auctioncontrols({ bid }) {
  const clickHandler = () => {
    bid();
  };

  const [gamestate] = useContext(GameStateContext);

  return (
    <Row className="auctioncontrols">
      <Button
        onClick={clickHandler}
        className="bidbutton"
        size="lg"
        varient="success"
      >
        Bid $ {gamestate.global.maxbid}
      </Button>
    </Row>
  );
}
