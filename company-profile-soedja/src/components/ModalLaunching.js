import React, { useState, useEffect } from "react";
import { Row, Container, Col, Button, Modal } from "react-bootstrap";
import IlustrasiPopUp from '../assets/ilustrasi/ilustrasi-pop-up.svg'
import Countdown from "react-countdown";
import { connect } from "react-redux";
import { ModalLaunchingController } from "../store/action";

const CountdownRenderer = ({ days, hours, minutes }) => {
    // Render a countdown
    return (
        <div className="d-flex flex-row launching-countdown-timer justify-content-center">
            <div className="d-flex flex-column launching-countdown-timer-time justify-content-center align-items-center">
                <h1>{days}</h1>
                <p>HARI</p>
            </div>

            <div>
                <h2>:</h2>
            </div>

            <div className="d-flex flex-column launching-countdown-timer-time justify-content-center align-items-center">
                <h1>{hours}</h1>
                <p>JAM</p>
            </div>

            <div>
                <h2>:</h2>
            </div>

            <div className="d-flex flex-column launching-countdown-timer-time justify-content-center align-items-center">
                <h1>{minutes}</h1>
                <p>MENIT</p>
            </div>
        </div>
    )
  };

function ModalLaunching(props) {


  return (
    <div>

      <Modal show={props.modalLaunching} onHide={() => {props.ModalLaunchingController(false)}} size="xl">
        <Modal.Body className="modal-launching-body p-0">
            <Col xs={12} className="d-flex flex-row justify-content-between align-items-center modal-launching-container">
            <i className="close-modal-launching-icon fas fa-times" onClick={() => {props.ModalLaunchingController(false)}}></i>
                <Col xs={6} className="p-0 modal-launching-ilustrasi">
                    <img
                    alt="ilustrasi soedja"
                    src={IlustrasiPopUp}
                    width="100%"
                    />
                </Col>
                <Col xs={6} className="modal-launching-content d-flex flex-column justify-content-center align-items-center">
                    <Col xs={10} className="d-flex flex-column p-0">
                    <div  className="modal-launching-content-title">
                        <h1>Lebih Cepat, Lebih</h1>
                        <h1>Dapat Diandalkan.</h1>
                    </div>
                    <div className="modal-content-description">
                        <p>Hi, Terima Kasih sudah berkunjung</p>
                        <p>ke website kami.</p>
                    </div>
                    <div className="modal-content-sub-description">
                        <p>Saat ini kami sedang memengembangkan infrastruktur</p>
                        <p>teknologi untuk pengalaman kolaborasi yang lebih baik</p>
                        <p>dengan aplikasi.</p>

                    </div>
                    <div className="countdown-container p-0">
                        <p className="countdown-title">100 Hari Menuju Launching App Bisnis & Freelance</p>
                        <Col xs={12} className="countdown-box d-flex flex-column align-items-center">
                            <Countdown
                            date={'06-04-2020 15:00'}
                            daysInHours={true}
                            renderer={CountdownRenderer}
                            />
                        </Col>
                    </div>
                    </Col>
                </Col>
            </Col>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => {
    return {
      modalLaunching: state.modalLaunching
    };
  };
  
const mapDispatchToProps = {
    ModalLaunchingController
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLaunching)