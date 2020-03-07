import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import SoedjaLogo from "../assets/Group339.png";
import Globe from "../assets/global(2).png";
import RedDot from "../assets/Group338.png";
import MarketPlace from "../assets/Group3.png";
import FlatButton from "./FlatButton";
import { Link, Redirect } from "react-router-dom";
import CreativeSchool from '../assets/creativeschool.png';
import CreativeHunt from '../assets/Path496.png';
import ModalLaunching from './ModalLaunching';
import { connect } from "react-redux";
import { ModalLaunchingController, ChangeLanguage } from "../store/action";

function NavbarComponent(props) {
  const [dropdownSolusi, setDropdownSolusi] = useState(false);

  const linkButton = (link) => {
    window.location.href = link
  }

  return (
    <div >
      {
        console.log(window.innerHeight, 'ini HEIGHT')
      }
      <Navbar className="global-navbar" bg="white" fixed="top" style={{ width : window.innerWidth, maxWidth: '1440px' }}>
        <Container
          className="d-flex justify-content-around align-items-center"
          fluid
        >
          <Col xs={4} xs={window.innerWidth <= 768 ? 2 : 4 } className="d-flex justify-content-start align-items-center" /* style={{ backgroundColor: 'red' }} */>
            <Navbar.Brand href="#">
              <img
                alt=""
                src={SoedjaLogo}
                width="150"
                height="50"
                className="navbar-image-brand d-inline-block align-top"
              />
            </Navbar.Brand>
          </Col>
          <Col xs={6} xs={window.innerWidth <= 768 ? 8 : 6 }>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-between align-items-center"
            >
              <div
                className="dropdown-solusi"
                onMouseEnter={() => {
                  setDropdownSolusi(true);
                }}
              >
                <button className="drop-button-solusi">
                  {
                    props.language === 'ind' ? "Solusi Kami" : "Our Solution"
                  }
                  <i className="solusi-icon fas fa-chevron-down"></i>
                </button>
              </div>
              <div className="dropdown-lang">
                <button className="drop-button-lang" onMouseEnter={() => {setDropdownSolusi(false)}}>
                  <img
                    alt=""
                    src={Globe}
                    width="22"
                    className={`icon-globe ${props.language === "eng" ? 'mr-4' : ''}`}
                  />
                  {
                    props.language === "ind" ? "Bahasa Indonesia" : "English"
                  }
                  <i className={`dropdown-icon fas fa-sort-down ${props.language === "eng" ? 'ml-5' : ''}`}></i>
                </button>
                <div className="dropdown-content-lang">
                  <a onClick={() => {props.ChangeLanguage('ind')}} style={{ cursor: 'pointer' }}>
                    Bahasa Indonesia
                    {props.language === "ind" ? (
                      <img
                        alt=""
                        src={RedDot}
                        width="25"
                        height="25"
                        className={window.innerWidth <= 768 ? 'ml-3' : 'ml-4' + ' button-lang-reddot'}
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
              <a className="navbar-link" /* href="https://www.soedja.com/login" */ onClick={() => {props.ModalLaunchingController(true)}} style={{ cursor: 'pointer' }}>
                {
                  props.language === "ind" ? "Masuk" : "Sign In"
                }
              </a>
              <FlatButton 
                buttonTitle={
                  props.language === "ind" ? "Daftar" : "Sign Up"
                } 
                backgroundColor={"white"} 
                linkHref={'https://www.soedja.com/daftar'} 
                />
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
      {dropdownSolusi ? (
        <div
          className="dropdown-solusi-content d-flex justify-content-center align-items-center"
          onMouseLeave={() => {
            setDropdownSolusi(false);
          }}
          style={{ width: window.innerWidth, maxWidth: '1440px' }}
        >
          <Container fluid>
            <Row className="d-flex justify-content-around">
              <Col xs={3} className="d-flex flex-row" style={{ cursor: 'pointer' }} onClick={() => {
                  linkButton('https://www.soedja.com/')
              }}>
                <img
                  alt=""
                  src={MarketPlace}
                  height="40"
                  className="icon-solusi-content"
                />
                <div className="mt-1">
                  <h4 className="solusi-content-title">Project Marketplace <i className="ml-2 solusi-content-title-icon fas fa-arrow-right"></i></h4>
                  <p className="solusi-content-subtitle">
                  {
                    props.language === "ind" ? "Platform kolaborasi bisnis dengan freelancer." : "Collaboration platform between business & freelancer."
                  }
                  </p>
                </div>
              </Col>
              <Col xs={3} className="d-flex flex-row" style={{ cursor: 'pointer' }} onClick={() => {
                  linkButton('https://www.soedja.com/school')
              }}>
                <img
                  alt=""
                  src={CreativeSchool}
                  height="40"
                  className="icon-solusi-content"
                />
                <div className="mt-1">
                  <h4 className="solusi-content-title">Creative School <i className="ml-2 solusi-content-title-icon fas fa-arrow-right"></i></h4>
                  <p className="solusi-content-subtitle">
                  {
                    props.language === "ind" ? "Platform pelatihan talent kreatif marketing & desain." : "Training for creative talent in marketing & Design."
                  }
                  </p>
                </div>
              </Col>
              <Col xs={3} className="d-flex flex-row" style={{ cursor: 'pointer' }} onClick={() => {
                  linkButton('https://www.soedja.com/hunt ')
              }}>
                <img
                  alt="soedja creative hunt"
                  src={CreativeHunt}
                  height="40"
                  className="icon-solusi-content"
                />
                <div className="mt-1">
                  <h4 className="solusi-content-title">Creative Hunt <i className="ml-2 solusi-content-title-icon fas fa-arrow-right"></i></h4>
                  <p className="solusi-content-subtitle">
                  {
                    props.language === "ind" ? "Program hiring talent untuk magang di perusahaan." : "Internship progam for talent to company & startups."
                  }
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : null}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = {
  ModalLaunchingController,
  ChangeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
