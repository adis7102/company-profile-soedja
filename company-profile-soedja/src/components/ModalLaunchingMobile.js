import React, { useState, useEffect } from "react";
import { Row, Container, Col, Button, Modal } from "react-bootstrap";
import IlustrasiPopUp from '../assets/ilustrasi/ilustrasi-pop-up.svg'
import Countdown from "react-countdown";
import { connect } from "react-redux";
import { ModalLaunchingController } from "../store/action";

const CountdownRenderer = ({ days, hours, minutes }) => {
    // Render a countdown
    return (
        <div className="d-flex flex-row launching-countdown-timer-mobile justify-content-center">
            <div className="d-flex flex-column launching-countdown-timer-time-mobile justify-content-center align-items-center">
                <h1>{days}</h1>
                <p>HARI</p>
            </div>

            <div>
                <h2>:</h2>
            </div>

            <div className="d-flex flex-column launching-countdown-timer-time-mobile justify-content-center align-items-center">
                <h1>{hours}</h1>
                <p>JAM</p>
            </div>

            <div>
                <h2>:</h2>
            </div>

            <div className="d-flex flex-column launching-countdown-timer-time-mobile justify-content-center align-items-center">
                <h1>{minutes}</h1>
                <p>MENIT</p>
            </div>
        </div>
    )
  };

function ModalLaunchingMobile(props) {


  return (
    <div>

      <Modal show={props.modalLaunching} onHide={() => {props.ModalLaunchingController(false)}} size="xs" centered>
        <Modal.Body className="modal-launching-body-mobile p-0">
            <Col xs={12} className="d-flex flex-column justify-content-center align-items-center modal-launching-container-mobile">
                <div  className="modal-launching-content-title-mobile">
                    <h1>Lebih Cepat</h1>
                    <h1>Untuk Dapat Kita</h1>
                    <h1>Andalkan.</h1>
                </div>
                <div className="modal-content-description-mobile">
                    <p>Hi, Terima Kasih sudah</p>
                    <p>berkunjung ke website kami.</p>
                </div>
                <div className="modal-content-sub-description-mobile">
                    <p>Saat ini kami sedang mengembangkan</p>
                    <p>infrastruktur teknologi untuk pengalaman</p>
                    <p>kolaborasi yang lebih baik dengan aplikasi.</p>

                </div>
                <div className="countdown-container-mobile p-0">
                    <p className="countdown-title-mobile">100 Hari Menuju Launching App Bisnis & Freelance</p>
                    <Col xs={12} className="countdown-box-mobile d-flex flex-column align-items-center">
                        <Countdown
                        date={'06-04-2020 15:00'}
                        daysInHours={true}
                        renderer={CountdownRenderer}
                        />
                    </Col>
                </div>
                <Col xs={12} className="countdown-kembali-mobile d-flex justify-content-center align-items-center" onClick={() => {props.ModalLaunchingController(false)}}>
                    <p>KEMBALI</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalLaunchingMobile)