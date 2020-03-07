import React, { useState, useEffect } from "react";
import { Row, Container, Col, Button, Modal, } from "react-bootstrap";
import { connect } from "react-redux";
import { ModalLaunchingController } from "../store/action";
import ModalLaunching from '../components/ModalLaunching';
import Ilustrasi from "../assets/ilustrasi/ilustrasi.svg";
import Ilustrasi2 from "../assets/ilustrasi/ilustrasi.png";
import FlatButton from "../components/FlatButton";
import ButtonVideo from "../assets/Group340.png";
import LogoCNN from "../assets/Image1.png";
import CountUp from "react-countup";
import { Controller, Scene } from "react-scrollmagic";
import TrackVisibility from "react-on-screen";
import Kioson from "../assets/logo-klien/Group345.png";
import Zipx from "../assets/logo-klien/Group344.png";
import Aviana from "../assets/logo-klien/Group343.png";
import efb from "../assets/logo-klien/Group348.png";
import firar from "../assets/logo-klien/Group347.png";
import crowde from "../assets/logo-klien/Group346.png";
import santaka from "../assets/logo-klien/Group349.png";
import police from "../assets/logo-klien/Group354.png";
import kominfo from "../assets/logo-klien/Group355.png";
import kamar from "../assets/logo-klien/Group352.png";
import oldy from "../assets/logo-klien/Group351.png";
import article from "../assets/logo-klien/Group353.png";
import pertamina from "../assets/logo-klien/Group350.png";
import VidioRed from "../assets/ondemand_video-24px.png";
import Indo from '../assets/Group341.png';
import SoedjaLogo from "../assets/Group3.png";
import BiangLala from "../assets/Group342.png";
import CustomToast from '../components/CustomToast';
import LiputancnnComp from '../assets/liputan-cnn.png';

{
  /* <Controller>
     <Scene duration={600} pin={true}>
        <h1>Sticky</h1>
     </Scene>
   </Controller> */
}

function HomePage(props) {
  const [watch, setWatch] = useState(false);
  const [toast, setToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const linking = link => {
    window.open(link, "_blank");
  };

  const linkingSelf = link => {
    window.open(link, '_self');
  }

  const Mailto = link => {
    window.location.href = 'mailto:people@soedja.com?Subject=Halo!%20Dari'
  }

  return (
    <Container fluid id="homepage">
      <Row id="homepage-hero">
        <Col
          xs={5}
          className="d-flex justify-content-center align-items-center"
        >
          <Col xs={10}>
            <p className="homepage-hero-introduction ml-1">
              SOEDJA Project Marketplace
            </p>
            <h1 className="hompage-hero-jargon">
              {
                props.language === "ind" ? "Membuka Ruang Kolaborasi." : "Make The Room for Collaboration."
              }
            </h1>
            <p className="homepage-hero-description">
              {
                props.language === "ind" ? "Cari freelancer secara cepat atau hasilkan pendapatan dari menyelesaikan pekerjaan." : "Instantly Hire freelancer or earn money from helping business project get done."
              }
            </p>
            <div className="d-flex flex-row">
              <FlatButton
                buttonTitle={
                  props.language === "ind" ?
                  "Cari Project" : "Search Project"
                }
                backgroundColor={"white"}
                linkHref={"https://www.soedja.com/browse/filter"}
                marginRight={"19px"}
              />
              <FlatButton
                buttonTitle={
                  props.language === "ind" ? `Buka Jobs` : 'Open Jobs'
                }
                backgroundColor={"#F72948"}
                fontColor={"white"}
                linkHref={"https://www.soedja.com/daftar"}
                type={"iconRight"}
                icon={"fas fa-arrow-right"}
                iconMargin={'18px'}
                noBorder={true}
              />
            </div>
          </Col>
        </Col>
        <Col xs={7} className="p-0 d-flex justify-content-end align-items-center">
          <img alt="ilustrasi" src={Ilustrasi2} className={`ilustrasi-hompage ${window.innerWidth <= 1024 ? `` : 'img-fluid'}`}/>
        </Col>
      </Row>

      <Row id="homepage-middle">
        <Container fluid className="middle-brown-container">
          <Row className="middle-brown-content d-flex justify-content-center align-items-center">
            <Col xs={11}>
              <Row className="d-flex justify-content-center align-items-center">
                <Col xs={6} className="middle-brown-container-left mb-5">
                  <div className="middle-brown-left-jargon">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible ? (
                          <h1>
                            <CountUp
                              end={2.375}
                              start={1}
                              decimals={3}
                              decimal=","
                              className="count-up"
                              duration={1.5}
                            />{" "}
                            Project
                          </h1>
                        ) : (
                          <h1>0 Project</h1>
                        )
                      }
                    </TrackVisibility>
                    <h1>
                      {
                        props.language === 'ind' ? 
                        "Selesai Dikerjakan." : "Finished."
                      }
                    </h1>
                  </div>
                  <div className="middle-brown-deskripsi">
                    <p>
                      {
                        props.language === "ind" ? 
                        "706 Kesempatan Kerja Terbuka" : "706 Job Opportunities open for local"
                      }
                    </p>
                    <p>
                      {
                        props.language === "ind" ?
                        "Untuk Pekerja Kreatif di Indonesia" : "creative worker in Indonesia."
                      }
                    </p>
                  </div>
                </Col>
                <Col
                  xs={6}
                  className="middle-brown-container-right d-flex justify-content-center align-items-center p-0"
                >
                  {watch ? (
                    <iframe
                      width="100%"
                      height="350"
                      src="https://www.youtube.com/embed/hnkama8Nnp4" frameborder="0" allow="accelerometer; encrypted-media; gyroscope;" allowfullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        alt="liputan cnn"
                        src={LiputancnnComp}
                        width="100%"
                        className="liputan-cnn"
                      />
                      <img
                        alt="button cnn"
                        src={ButtonVideo}
                        height="127"
                        className="button-cnn"
                        onClick={() => {setWatch(true)}}
                      />
                      <Col xs={10} className="video-description-container p-0 d-flex flex-row justify-content-center align-items-center">
                        <Col
                          xs={11}
                          className="d-flex flex-row align-items-center justify-content-center p-0"
                        >
                          <Col xs={9} className="p-0">
                            <p className="video-title-description">
                              {
                                props.language === "ind" ? 
                                "Liputan CNN TV Nasional - " : "National Broadcast CNN TV"
                              }
                              <span className="vidio-title-description-regular">
                                {
                                  props.language === "ind" ?
                                  "Peluang Kolaborasi Bisnis" : "Collaboration Opportunity"
                                }
                              </span>
                            </p>
                            <p className="vidio-title-description-regular">
                              {
                                props.language === "ind" ?
                                "Dengan Pekerja Digital" : "for business and digital creator."
                              }
                            </p>
                          </Col>
                          <Col xs={3}>
                            <img
                              alt="logo cnn"
                              src={LogoCNN}
                              className="logo-cnn-video"
                            />
                          </Col>
                        </Col>
                      </Col>
                    </>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Row>

      <Row id="homepage-partner">
        <Col xs={12} className="d-flex flex-row justify-content-around">
          <Col xs={window.innerWidth <= 768 ? 10 : 9} className="homepage-partner-left">
            <Col xs={7} className="klien-section-title mt-4">
              <p>
                {
                  props.language === "ind" ?
                  "Mereka yang membuat project bersama freelancer:" : "Those who worked with freelancer:"
                }
              </p>
            </Col>
            <Col xs={8} className="logo-klien-top d-flex align-items-center">
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={Kioson}
                height="45"
                onClick={() => {
                  linking("http://www.kioson.com/");
                }}
                className="client-logo-top"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={Zipx}
                height="45"
                onClick={() => {
                  linking("https://zipx.com/en/");
                }}
                className="client-logo-top"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={Aviana}
                height="45"
                onClick={() => {
                  linking("https://aviana.co.id/");
                }}
                className="client-logo-top"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={efb}
                height="45"
                onClick={() => {
                  linking("https://www.avplan-efb.com/");
                }}
                className="client-logo-top"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={firar}
                height="45"
                onClick={() => {
                  linking("https://www.instagram.com/firar.id/");
                }}
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={crowde}
                height="45"
                onClick={() => {
                  linking("https://www.crowde.co/");
                }}
                className="client-logo-top"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={santaka}
                height="45"
                className="client-logo-top"
              />
            </Col>
            <Col
              xs={6}
              className="logo-klien-bot d-flex justify-content-evenly align-items-center"
            >
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={police}
                height="45"
                onClick={() => {
                  linking("https://www.polri.go.id/");
                }}
                className="client-logo-bot"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={kominfo}
                height="45"
                onClick={() => {
                  linking("http://tte.kominfo.go.id/");
                }}
                className="client-logo-bot"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={kamar}
                height="45"
                onClick={() => {
                  linking("https://kamarkeluarga.com/");
                }}
                className="client-logo-bot"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={oldy}
                height="45"
                onClick={() => {
                  linking("http://oldy.co.id/");
                }}
                className="client-logo-bot"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={article}
                height="45"
                className="client-logo-bot"
              />
              <img
                style={{ cursor: "pointer" }}
                alt=""
                src={pertamina}
                height="45"
                onClick={() => {
                  linking("https://www.pertamina.com/");
                }}
                className="client-logo-bot"
              />
            </Col>
          </Col>
          <Col
            xs={2}
            className="d-flex flex-row justify-center homepage-partner-right"
          >
            <div
              className="d-flex flex-row align-items-center home-page-partner-right-content"
              onClick={() => {
                linking("https://www.youtube.com/watch?v=hnkama8Nnp4");
              }}
            >
              <img alt="" src={VidioRed} height="35" className="homepage-partner-logo-youtube" />
              <p className="lihat-di-youtube-title ml-2">
                {
                  props.language === "ind" ?
                  "Lihat di Youtube" : "Watch on Youtube"
                }
              </p>
            </div>
          </Col>
        </Col>
      </Row>

      <Row id="footer">
        <Col xs={12} className="d-flex flex-row justify-content-around align-items-center">
            <Col xs={5} className="footer-section-left d-flex flex-row justify-content-between align-items-start">
                <Col xs={4} className="footer-section-left-container p-0">
                    <p className="footer-left-title">
                      {
                        props.language === "ind" ?
                        "PERUSAHAAN" : "COMPANY"
                      }
                    </p>
                    <div className="footer-left-content d-flex flex-column mt-5">
                        <p onClick={() => {linkingSelf('https://www.soedja.com/cara-kerja/tentang-soedja')}}>
                          {
                            props.language === "ind" ?
                            "Tentang Kami" : "About Us"
                          }
                        </p>
                        <p onClick={() => {linkingSelf('https://www.linkedin.com/company/soedja/')}}>
                          {
                            props.language === "ind" ?
                            "Karir Di SOEDJA" : "Career at SOEDJA"
                          }
                        </p>
                        <p onClick={() => {Mailto()}}>
                          {
                            props.language === "ind" ? 
                            "Hubungi Kami" : "Contact Us"
                          }
                        </p>
                        <p onClick={() => {linkingSelf('https://www.google.com/maps/place/Soedja.com/@-6.163868,106.8156049,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f59b9673f5bb:0xa897f88fcc1724b0!8m2!3d-6.1638733!4d106.8177936')}}>
                          {
                            props.language === "ind" ?
                            "Lokasi" : "Location"
                          }
                        </p>
                    </div>
                </Col>
                <Col xs={7} className="footer-section-left-container p-0">
                    <p className="footer-left-title">
                      {
                        props.language === "ind" ?
                        "PROGRAM" : "PROGRAMS"
                      }
                    </p>
                    <div className="footer-left-content mt-5">
                        <p onClick={() => {linkingSelf('https://www.soedja.com')}}>SOEDJA - Project Marketplace</p>
                        <p onClick={() => {linkingSelf('https://www.soedja.com/school')}}>SOEDJA - Project Creative School</p>
                        <p onClick={() => {linkingSelf('https://www.soedja.com/hunt')}}>SOEDJA - Project Creative Hunt</p>
                    </div>
                </Col>
            </Col>
            <Col xs={5} className="footer-section-right">
                <Col xs={12} className="d-flex justify-content-between align-items-center">
                    <p className="kirim-link-whatsapp-title">
                      {
                        props.language === "ind" ?
                        "KIRIM LINK DOWNLOAD KE WAHTASAPP" : "DOWNLOAD LINK VIA WHATSAPP"
                      }
                    </p>
                    <div className="d-flex justify-content-center align-items-center footer-belum-tersedia">
                        <p>
                          {
                            props.language === "ind" ?
                            "Belum Tersedia" : "Unavilable"
                          }
                        </p>
                    </div>
                </Col>
                <Col xs={12} className="nomor-telepon-kolom mt-5">
                    <p className="nomor-telepon">
                      {
                        props.language === "ind" ?
                        "NOMOR TELEPON" : "PHONE NUMBER"
                      }
                    </p>
                    <Col xs={12} className="nomor-telepon-input d-flex flex-row p-0">
                        <Col xs={3} className="country-code d-flex flex-row justify-content-center align-items-center m-0 p-0">
                            <img
                            src={Indo}
                            alt=""
                            height="27"
                            className="bendera-indonesia"
                            />
                            <p className="ml-2">+62</p>
                        </Col>
                        <Col xs={9} className="nomor-telepon-container d-flex flex-row justify-content-around align-items-center">
                            <input type="number" id="whatsappnumb" name="whatsapp" placeholder="Exp: 081123***" />
                            <i className="nomor-telepon-content-input-arrow fas fa-arrow-right" onClick={() => {setToast(true)}}></i>
                        </Col>
                    </Col>
                </Col>
                <Col xs={12} className="atau-gunakan-email mt-4">
                    <p>
                      {
                        props.language === "ind" ?
                        "ATAU GUNAKAN EMAIL" : "OR USING EMAIL"
                      }
                    </p>
                </Col>
                <Col xs={12} className="nomor-telepon-kolom mt-4">
                    <p className="nomor-telepon">
                      {
                        props.language === "ind" ?
                        "ALAMAT EMAIL" : "EMAIL ADRESS"
                      }
                    </p>
                    <Col xs={12} className="nomor-telepon-input d-flex flex-row justify-content-center align-items-center p-0">
                        <Col xs={11} className="nomor-telepon-container d-flex flex-row justify-content-between align-items-center">
                            <input type="text" id="whatsappnumb" name="email" placeholder={
                              props.language === "ind" ?
                              "ALAMAT EMAIL KAMU" : "YOUR EMAIL ADRESS"
                            } />
                            <i className="nomor-telepon-content-input-arrow fas fa-arrow-right" onClick={() => {setToast(true)}}></i>
                        </Col>
                    </Col>
                </Col>
            </Col>
        </Col>
      </Row>

      <Row id="homepage-logo-footer" className={`d-flex flex-row align-items-center ${window.innerWidth <= 1024 ? "justify-content-around" : "justify-content-between"}`}>
          <Col xs={5} className="d-flex flex-row justify-content-center align-items-center homepage-logo-footer-left">
              <img
              src={SoedjaLogo}
              alt=""
              className="footer-soedja-logo"
              />
              <p className="homepage-footer-logo-company-name">PT SOEMBER DJAYA MASYARAKAT | SOEDJA Copyright (c) 2020</p>
          </Col>
          <Col xs={5} className="d-flex flex-row justify-content-center align-items-center">
            <img
              src={BiangLala}
              alt=""
              className="footer-bianglala"
            />
          </Col>
      </Row>
      <CustomToast
        width={410}
        show={toast}
        transition={true}
        position="top-middle"
        message={'Fitur Belum Ready Nih'}
        subMessage={'Coba lagi nanti yah.'}
        style={{ backgroundColor: 'white', height: '85px' }}
        onCloseCLick={() => { setToast(false) }}
      />
      <ModalLaunching />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    modalLaunching: state.modalLaunching,
    language: state.language
  };
};

const mapDispatchToProps = {
  ModalLaunchingController
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
