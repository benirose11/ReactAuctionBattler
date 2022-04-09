import { Row, Col, Button } from "react-bootstrap";
import "./components.css";

export default function Auctioncontrols({ seats, bid }) {
  const clickHandler = () => {
    bid();
  };

  return (
    <Row className="auctioncontrols">
      <Button
        onClick={clickHandler}
        className="bidbutton"
        size="lg"
        varient="success"
      >
        Bid $ {seats.global.maxbid}
      </Button>
    </Row>
  );
}
