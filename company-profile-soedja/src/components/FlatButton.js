import React from "react";
import { connect } from "react-redux";
import { ModalLaunchingController } from "../store/action";

function FlatButton(props) {
  const linking = link => {
    window.open(link, "_self");
  };

  const buttonStyle = {
    border: props.noBorder ? '' : ".2px solid #bdbdbd",
    backgroundColor: props.backgroundColor,
    color: props.fontColor ? props.fontColor : "black",
    marginRight: props.marginRight ? props.marginRight : null,
    width: props.widthButton
  };

  return (
    <>
      {props.type === "iconRight" ? (
        <div
          className="flat-button"
          style={buttonStyle}
          /* onClick={() => {
            linking(props.linkHref);
          }} */

          onClick={() => {
            props.ModalLaunchingController(true)
          }}
        >
          <p>{props.buttonTitle || "TITLE"}</p>
          <i
            style={{ marginLeft: props.iconMargin }}
            className={props.icon}
          ></i>
        </div>
      ) : (
        <div
          className="flat-button"
          style={buttonStyle}
          /* onClick={() => {
            linking(props.linkHref);
          }} */

          onClick={() => {
            props.ModalLaunchingController(true)
          }}
        >
          <p>{props.buttonTitle || "TITLE"}</p>
          <i
            style={{ marginLeft: props.iconMargin }}
            className={props.icon}
          ></i>
        </div>
      )}
    </>
  );
}


const mapDispatchToProps = {
  ModalLaunchingController
};

export default connect(null, mapDispatchToProps)(FlatButton)