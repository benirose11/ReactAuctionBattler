import { Col, Row } from "react-bootstrap";
import classes from "./draftitems.module.css";
import Drafguyinfofield from "./Draftguyinfofield";

export default function Emptyitem() {
  return (
    <Row className={classes.draftitemwrapper}>
      <Col>
        <Drafguyinfofield fieldname={"Name"} fieldtext={""}></Drafguyinfofield>
        <Drafguyinfofield
          fieldname={"Damage"}
          fieldtext={""}
        ></Drafguyinfofield>
        <Drafguyinfofield
          fieldname={"Damage Type"}
          fieldtext={""}
        ></Drafguyinfofield>
        <Drafguyinfofield
          fieldname={"Defense"}
          fieldtext={""}
        ></Drafguyinfofield>
        <Drafguyinfofield
          fieldname={"Special Ability"}
          fieldtext={""}
        ></Drafguyinfofield>
      </Col>
    </Row>
  );
}

{
  /* <div className="draftedguytextfields">HP:</div>
        <div className="draftedguytextfields">Damage Type: </div>
        <div className="draftedguytextfields">Damage: </div>
        <div className="draftedguytextfields">Defense: </div>
        <div className="draftedguytextfields">Special Ability:</div> */
}
