import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Globe from "../assets/global(2).png";
import RedDot from "../assets/Group338.png";
import MarketPlace from "../assets/Group3.png";
import CreativeSchool from '../assets/creativeschool.png';
import CreativeHunt from '../assets/Path496.png';
import FlatButton from '../components/FlatButton';
import { connect } from "react-redux";
import { ModalLaunchingController, ChangeLanguage } from "../store/action";

function DrawerComponent(props) {
    const [currentLang, setCurrentLang] = useState("ind");

    const linkButton = (link) => {
        window.location.href = link
    }
  return (
    <div>
      <Container id="drawer-component">
        <Row id="drawer-top" className="d-flex justify-content-center align-items-center">
          <Col xs={11} className="d-flex justify-content-between align-items-center">
            <div className="dropdown-lang-drawer">
              <button
                className="drop-button-lang-drawer"
              >
                <img
                    alt=""
                    src={Globe}
                    width="22"
                    className={`icon-globe-drawer ${props.language === "eng" ? 'mr-4' : ''}`}
                  />
                  {
                    props.language === "ind" ? "Bahasa Indonesia" : "English"
                  }
                  <i className={`dropdown-icon-drawer fas fa-sort-down ${props.language === "eng" ? 'ml-4' : ''}`}></i>
              </button>
              <div className="dropdown-content-lang-drawer">
                <a onClick={() => {props.ChangeLanguage('ind')}} style={{ cursor: 'pointer' }}>
                    Bahasa Indonesia
                  {props.language === "ind" ? (
                    <img
                      alt=""
                      src={RedDot}
                      width="25"
                      height="25"
                      className={
                        window.innerWidth <= 768
                          ? "ml-3"
                          : "ml-4" + " button-lang-reddot"
                      }
                    />
                  ) : null}
                </a>
                <hr></hr>
                <a onClick={() => {props.ChangeLanguage('eng')}} style={{ cursor: 'pointer' }}>
                    English
                  {props.language === "eng" ? (
                    <img
                      alt=""
                      src={RedDot}
                      width="25"
                      height="25"
                      className="ml-4"
                    />
                  ) : null}
                </a>
              </div>
            </div>
            <i className="close-button fas fa-times" onClick={() => {props.closeDrawer()}}></i>
          </Col>
        </Row>

        {/* <Row id="drawer-middle" className="d-flex justify-content-center align-items-center">
            <Col xs={11}>
                <div className="drawer-middle-title">
                    <p>SOLUSI KAMI</p>
                </div>
            </Col>
            <Col xs={11} className="d-flex flex-row" onClick={() => {
                  linkButton('https://www.soedja.com/')
              }}>
                <Col xs={2} className="drawer-middle-icon p-0">
                    <img
                    alt="soedja"
                    src={MarketPlace}
                    height="30"
                    className="drawer-middle-image-icon"
                    />
                </Col>
                <Col xs={10} className="drawer-middle-container pl-1">
                    <div className="drawer-content-top d-flex flex-row justify-content-between align-items-center">
                        <p>Project Marketplace</p>
                        <i className="drawer-content-icon fas fa-arrow-right"></i>
                    </div>
                    <div className="drawer-content-bottom">
                        <p>Platform kolaborasi dengan</p>
                        <p>freelancer.</p>
                    </div>
                </Col>
            </Col>
            <Col xs={11} className="d-flex flex-row" onClick={() => {
                  linkButton('https://www.soedja.com/school')
              }}>
                <Col xs={2} className="drawer-middle-icon p-0">
                    <img
                    alt="soedja"
                    src={CreativeSchool}
                    height="30"
                    className="drawer-middle-image-icon"
                    />
                </Col>
                <Col xs={10} className="drawer-middle-container pl-1">
                    <div className="drawer-content-top d-flex flex-row justify-content-between align-items-center">
                        <p>Creative School</p>
                        <i className="drawer-content-icon fas fa-arrow-right"></i>
                    </div>
                    <div className="drawer-content-bottom">
                        <p>Platform kolaborasi dengan</p>
                        <p>freelancer.</p>
                    </div>
                </Col>
            </Col>
            <Col xs={11} className="d-flex flex-row" onClick={() => {
                  linkButton('https://www.soedja.com/hunt ')
              }}>
                <Col xs={2} className="drawer-middle-icon p-0">
                    <img
                    alt="soedja"
                    src={CreativeHunt}
                    height="30"
                    className="drawer-middle-image-icon"
                    />
                </Col>
                <Col xs={10} className="drawer-middle-container pl-1">
                    <div className="drawer-content-top d-flex flex-row justify-content-between align-items-center">
                        <p>Creative Hunt</p>
                        <i className="drawer-content-icon fas fa-arrow-right"></i>
                    </div>
                    <div className="drawer-content-bottom">
                        <p>Platform kolaborasi dengan</p>
                        <p>freelancer.</p>
                    </div>
                </Col>
            </Col>
        </Row> */}

        <Row id="drawer-button" className="d-flex flex-column justify-content-center align-items-center" style={{ marginTop: "85px" }}> {/* NANTI ILANGIN YANG INI */}
            <Col xs={11} className="p-0">
                <FlatButton 
                buttonTitle={
                  props.language === "ind" ? "Daftar" : "Sign Up"
                }
                backgroundColor={"white"} linkHref={'https://www.soedja.com/daftar'} widthButton={'100%'} />
            </Col>
            <a className="navbar-link mt-3 mb-4" /* href="https://www.soedja.com/login" */ style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }} onClick={() => {props.ModalLaunchingController(true)}}>
                {
                  props.language === "ind" ? "Masuk" : "Sign In"
                }
            </a>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modalLaunching: state.modalLaunching,
    language: state.language
  };
};

const mapDispatchToProps = {
  ModalLaunchingController,
  ChangeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerComponent)