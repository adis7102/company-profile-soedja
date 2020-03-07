import React from "react";
import ToastWrapper from "./toast.style";
import classNames from "classnames";
import { Row, Col } from "react-bootstrap";
import SoedjaLogo from "../assets/Group3.png";

const CustomToast = props => {
  const {
    message,
    subMessage,
    className,
    style,
    width,
    position = "",
    show,
    transition = true
  } = props;

  return (
    <ToastWrapper width={width}>
      {show && (
        <div
          className={classNames(
            className,
            "custom-toast shadow-lg d-flex flex-row justify-content-center align-items-center",
            transition && position.substring(0, 3) === "top" && "animated",
            transition && position.substring(0, 3) === "top" && "fadeInDown",
            transition && position.substring(0, 6) === "bottom" && "animated",
            transition && position.substring(0, 6) === "bottom" && "fadeInUp",
            position
          )}
          style={style}
        >
          {/* <div>
                        <i className="fas fa-bell mr-8" />
                        <strong className="mr-auto">{heading}</strong>
                        <i
                            className="far fa-times-circle close-icon"
                            onClick={() =>
                                props.onCloseCLick &&
                                props.onCloseCLick()
                            }
                        />
                    </div> */}
          <Row
            className="d-flex flex-row 
                    justify-content-around align-items-center"
            style={{ width: "85%" }}
          >
            <Col xs={window.innerWidth <= 480 ? 2 : 3}>
              <img
                alt=""
                src={SoedjaLogo}
                // width="42"
                height="41"
                className="soedja-logo-toast"
              />
            </Col>
            <Col xs={window.innerWidth <= 480 ? 8 : 7}>
              <div className="toast-head-message">{message}</div>
              <div className="toast-sub-message">{subMessage}</div>
            </Col>
            <Col xs={window.innerWidth <= 480 ? 1 : 2}>
              <i
                className="far fa-times-circle close-icon"
                onClick={() => props.onCloseCLick && props.onCloseCLick()}
              />
            </Col>
          </Row>
        </div>
      )}
    </ToastWrapper>
  );
};

export default CustomToast;
