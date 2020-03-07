import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../store/action";
import { Row, Container, Col } from "react-bootstrap";
import Ilustrasi from "../assets/ilustrasi/mobile-illustration.png";
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
import Indo from "../assets/Group341.png";
import SoedjaLogo from "../assets/Group3.png";
import BiangLala from "../assets/Group342.png";
import CustomToast from "../components/CustomToast";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import CreativeSchool from "../assets/creativeschool.png";
import CreativeHunt from "../assets/Path496.png";
import MarketPlace from "../assets/Group3.png";
import ModalLaunchingMobile from '../components/ModalLaunchingMobile';
import LiputancnnComp from '../assets/liputan-cnn.png';

{
  /* <Controller>
     <Scene duration={600} pin={true}>
        <h1>Sticky</h1>
     </Scene>
   </Controller> */
}

function MobileHomePage(props) {
  const [watch, setWatch] = useState(false);
  const [toast, setToast] = useState(false);

  const options = {
    items: 1,
    nav: true,
    rewind: false,
    autoplay: false
  };
  const linking = link => {
    window.open(link, "_blank");
  };

  const linkingSelf = link => {
    window.open(link, "_self");
  };

  const Mailto = link => {
    window.location.href = "mailto:people@soedja.com?Subject=Halo!%20Dari";
  };

  return (
    <Container
      fluid
      id="homepage-mobile"
      className="d-flex flex-column justify-content-center" style={{ width: window.innerWidth }}
    >
      <Row
        id="homepage-hero-mobile"
        className="d-flex justify-content-center align-items-center p-0"
        style={{ width: window.innerWidth }}
      >
        <Col
          xs={12}
          className="d-flex  flex-column jusitfy-content-center align-items-center homepage-hero-top p-0"
        >
          <p className="homepage-hero-introduction-mobile">
            SOEDJA Project Marketplace
          </p>
          <h1 className="hompage-hero-jargon-mobile">
            {
                props.language === "ind" ? "Membuka Ruang" : "Make The Room"
              }</h1>
          <h1 className="homepage-hero-jargon-bot-mobile">
              {
                props.language === "ind" ?
                "Kolaborasi" : "for Collaboration."
              }
          </h1>
          <p className="homepage-hero-description-mobile">
            {
              props.language === "ind" ?
              "Cari freelancer secara cepat atau hasilkan" : "Instantly Hire freelancer or earn money"
            }
          </p>
          <p className="homepage-hero-description-bot-mobile">
            {
              props.language === "ind" ?
              "pendapatan dari menyelesaikan pekerjaan." : "from helping business project get done."
            }
          </p>
          <Row>
            <FlatButton
              buttonTitle={
                props.language === "ind" ?
                "Cari Project" : "Search Project"
              }
              backgroundColor={"white"}
              linkHref={"https://www.soedja.com/browse/filter"}
              marginRight={"14px"}
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
              iconMargin={"25px"}
            />
          </Row>
        </Col>
        <Col xs={12} className="ilustrasi-homepage-mobile p-0">
          <img alt="ilustrasi" src={Ilustrasi} className="img-fluid" />
        </Col>
      </Row>

      <Row id="homepage-middle-mobile" className="p-0">
        <Container fluid className="middle-brown-container-mobile p-0">
          {/* <Col xs={12} style={{ overflow: 'auto' }}>
            <p className="ml-3 mt-4 program-title">Program</p>
            <div
              className="hompage-scrollmenu-mobile"
              style={{ width: window.innerWidth }}
            >
              <div className="hompage-scrollmenu-content-mobile">
                <div className="program-mobile-container shadow-sm d-flex flex-column justify-content-center align-items-center">
                  <img src={MarketPlace} height="45" className="mb-4" />
                  <p className="program-mobile-container-title">
                    Project Marketplace
                  </p>
                  <p className="program-mobile-container-subtitle-top">
                    Program kolaborasi bisnis
                  </p>
                  <p className="program-mobile-container-subtitle">
                    dengan freelancer.
                  </p>
                </div>
              </div>
              <div className="hompage-scrollmenu-content-mobile">
                <div className="program-mobile-container shadow-sm d-flex flex-column justify-content-center align-items-center">
                  <img src={CreativeSchool} height="45" className="mb-4" />
                  <p className="program-mobile-container-title">
                    Creative School
                  </p>
                  <p className="program-mobile-container-subtitle-top">
                    Platform pelatihan talent kreatif
                  </p>
                  <p className="program-mobile-container-subtitle">
                    marketing & desain.
                  </p>
                </div>
              </div>
              <div className="hompage-scrollmenu-content-mobile mr-3">
                <div className="program-mobile-container shadow-sm d-flex flex-column justify-content-center align-items-center">
                  <img src={CreativeHunt} height="45" className="mb-4" />
                  <p className="program-mobile-container-titl">Creative Hunt</p>
                  <p className="program-mobile-container-subtitle-top">
                    Program hiring talent untuk{" "}
                  </p>
                  <p className="program-mobile-container-subtitle">
                    magang di perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </Col> */}
          <Col
            xs={12}
            className="middle-brown-container-content-mobile mb-5 mt-4 d-flex justify-content-center align-items-center p-0"
          >
            <Col xs={11}  
                /* NANTI ILANGIN INI */
                style={{ marginTop: '56px' }}
              >
              <div className="middle-brown-content-jargon-mobile">
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
              <div className="middle-brown-deskripsi-mobile">
                <p>
                  {
                    props.language === "ind" ?
                    "706 Kesempatan Kerja Terbuka" : "706 Job Opportunities open"
                  }
                </p>
                <p>
                  {
                    props.language === "ind" ? 
                    "Untuk Pekerja Kreatif di Indonesia" : "for local creative worker in Indonesia."
                  }
                </p>
              </div>
            </Col>
          </Col>
        </Container>
      </Row>

      <div
        id="homepage-partner-mobile"
        className="d-flex flex-column align-items-center mt-5 p-0"
      >
        <Col xs={10} className="homepage-partner-mobile-title p-0">
              <p>
                {
                  props.language === "ind" ?
                  "Mereka yang membuat project bersama freelancer:" : "Those who worked with freelancer:"
                }
              </p>
        </Col>
        <Col
          xs={11}
          className="d-flex flex-column justify-content-evenly align-items-center mt-4 p-0"
        >
          <div className="d-flex flex-row justify-content-between align-items-center partner-logo-three mt-3">
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
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center partner-logo-three mt-3">
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
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center partner-logo-three mt-3">
            <img
              style={{ cursor: "pointer" }}
              alt=""
              src={santaka}
              height="45"
              className="client-logo-top"
            />
            <img
              style={{ cursor: "pointer" }}
              alt=""
              src={police}
              height="40"
              onClick={() => {
                linking("https://www.polri.go.id/");
              }}
              className="client-logo-bot client-logo-police"
            />
            <img
              style={{ cursor: "pointer" }}
              alt=""
              src={kominfo}
              height="40"
              onClick={() => {
                linking("http://tte.kominfo.go.id/");
              }}
              className="client-logo-bot client-logo-kominfo"
            />
          </div>

          <div className="d-flex flex-row justify-content-between align-items-center partner-logo-three mt-3">
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
          </div>
          <Col
            xs={12}
            className="d-flex justify-content-center align-items-center mt-3"
          >
            <img
              style={{ cursor: "pointer" }}
              alt=""
              src={pertamina}
              height="50"
              onClick={() => {
                linking("https://www.pertamina.com/");
              }}
              className="client-logo-bot"
            />
          </Col>
        </Col>
      </div>

      <Row
        id="video-container-mobile"
        className="d-flex justify-content-center"
      >
        <Col
          xs={11}
          className="video-container-content-mobile d-flex flex-column justify-content-center align-items-center p-0"
        >
          {watch ? (
            <iframe
              width="100%"
              height="245"
              src="https://www.youtube.com/embed/hnkama8Nnp4"
              frameBorder="0"
            ></iframe>
          ) : (
            <>
              <img
                alt="liputan cnn"
                src={LiputancnnComp}
                height="245"
                width="100%"
                className="liputan-cnn-mobile"
              />
              <img
                alt="button cnn"
                src={ButtonVideo}
                height="115"
                className="button-cnn-mobile"
                onClick={() => {
                  setWatch(true);
                }}
              />
              <Col
                xs={11}
                className="video-description-container-mobile p-0 d-flex flex-column justify-content-center align-items-center"
              >
                <Col
                  xs={11}
                  className="d-flex flex-row align-items-center justify-content-center p-0"
                >
                  <Col xs={8} className="p-0">
                    <p className="video-title-description-mobile" style={{ fontSize: props.language === "eng" ? "13px" : "13.5px" }}>
                    {
                                props.language === "ind" ? 
                                "Liputan CNN TV Nasional" : "National Broadcast CNN TV"
                              }
                    </p>
                  </Col>
                  <Col xs={4} className="p-0">
                    <img
                      alt="logo cnn"
                      src={LogoCNN}
                      className="logo-cnn-video-mobile"
                    />
                  </Col>
                </Col>
              </Col>
            </>
          )}
        </Col>
        {watch ? null : (
          <Col xs={9} className="mobile-video-caption d-flex flex-column p-0">
            <p>{
                                  props.language === "ind" ?
                                  "Peluang Kolaborasi Bisnis Dengan" : "Collaboration Opportunity"
                                }</p>
            <p>
              {
                props.language === "ind" ?
                "Pekerja Digital" : "for business and digital creator."
              }
            </p>
          </Col>
        )}
        <Col
          xs={9}
          className="d-flex justify-content-end lihat-di-youtube-container mt-3"
        >
          <div
            className="d-flex flex-row align-items-center "
            onClick={() => {
              linking("https://www.youtube.com/watch?v=hnkama8Nnp4");
            }}
          >
            <img
              alt=""
              src={VidioRed}
              height="28"
              className="homepage-partner-logo-youtube"
            />
            <p className="lihat-di-youtube-title ml-2">{
                  props.language === "ind" ?
                  "Lihat di Youtube" : "Watch on Youtube"
                }</p>
          </div>
        </Col>
      </Row>

      <Row id="footer-mobile-top">
        <Col
          xs={12}
          className="d-flex flex-column justify-content-around align-items-center footer-container-mobile pt-5"
        >
            <Col xs={11} className="footer-content-top-mobile p-0 d-flex flex-row justify-content-between align-items-center">
                <Col xs={6} className="footer-content-top-mobile d-flex flex-column justify-content-start">
                    <p className="footer-content-top-title"> {
                        props.language === "ind" ?
                        "PERUSAHAAN" : "COMPANY"
                      }</p>
                    <div className="footer-content-top-links">
                        <p onClick={() => {linkingSelf('https://www.soedja.com/cara-kerja/tentang-soedja')}}>{
                            props.language === "ind" ?
                            "Tentang Kami" : "About Us"
                          }</p>
                        <p onClick={() => {linkingSelf('https://www.linkedin.com/company/soedja/')}}>{
                            props.language === "ind" ?
                            "Karir Di SOEDJA" : "Career at SOEDJA"
                          }</p>
                        <p onClick={() => {Mailto()}}>{
                            props.language === "ind" ? 
                            "Hubungi Kami" : "Contact Us"
                          }</p>
                        <p onClick={() => {linkingSelf('https://www.google.com/maps/place/Soedja.com/@-6.163868,106.8156049,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f59b9673f5bb:0xa897f88fcc1724b0!8m2!3d-6.1638733!4d106.8177936')}}>{
                            props.language === "ind" ?
                            "Lokasi" : "Location"
                          }</p>
                    </div>
                </Col>
                <Col xs={6} className="footer-content-top-mobile d-flex flex-column justify-content-start">
                    <p className="footer-content-top-title">{
                        props.language === "ind" ?
                        "PROGRAM" : "PROGRAMS"
                      }</p>
                    <div className="footer-content-top-links">
                        <p onClick={() => {linkingSelf('https://www.soedja.com')}}>SOEDJA - Project Marketplace</p>
                        <p onClick={() => {linkingSelf('https://www.soedja.com/school')}}>SOEDJA - Project Creative School</p>
                        <p onClick={() => {linkingSelf('https://www.soedja.com/hunt')}}>SOEDJA - Project Creative Hunt</p>
                    </div>
                </Col>
            </Col>
        </Col>
      </Row>

      <Row id="footer-mobile-bot" className="d-flex flex-column justiy-content align-items-center">
          <Col xs={10} className="footer-form-title-container">
            <div className="title-form-footer">
                <p>{
                        props.language === "ind" ?
                        "KIRIM LINK DOWNLOAD KE WAHTASAPP" : "DOWNLOAD LINK VIA WHATSAPP"
                      }</p>
            </div>
            <div className="alert-belum-tersedia d-flex justify-content-center align-items-center">
                <p>{
                            props.language === "ind" ?
                            "Belum Tersedia" : "Unavilable"
                          }</p>
            </div>
          </Col>
          <Col xs={10} className="footer-form-mobile">
              <p className="mobile-footer-form-label">{
                        props.language === "ind" ?
                        "NOMOR TELEPON" : "PHONE NUMBER"
                      }</p>
              <Col xs={12} className="nomor-telepon-input-mobile d-flex flex-row p-0 jusfity-content-center">
                <Col
                  xs={3}
                  className="country-code-mobile d-flex flex-row justify-content-center align-items-center"
                >
                  <img
                    src={Indo}
                    alt=""
                    height="27"
                    className="bendera-indonesia-mobile"
                  />
                  <p className="ml-2">+62</p>
                </Col>
                <Col
                  xs={6}
                  className="nomor-telepon-container-mobile d-flex flex-row align-items-center"
                >
                  <input
                    type="number"
                    id="whatsappnumb-mobile"
                    name="whatsapp"
                    placeholder="Exp: 081123***"
                    className="mr-4"
                    style={{ width: '120px' }}
                  />
                  <i
                    className="nomor-telepon-content-input-arrow-mobile fas fa-arrow-right"
                    onClick={() => {
                      setToast(true);
                    }}
                  ></i>
                </Col>
              </Col>
          </Col>

          <Col xs={10} className="atau-gunakan-alamat-email-mobile">
              <p>{
                        props.language === "ind" ?
                        "ATAU GUNAKAN EMAIL" : "OR USING EMAIL"
                      }</p>
          </Col>

          <Col xs={10} className="footer-form-mobile">
              <p className="mobile-footer-form-label">{
                        props.language === "ind" ?
                        "ALAMAT EMAIL" : "EMAIL ADRESS"
                      }</p>
              <Col xs={12} className="nomor-telepon-input-mobile d-flex flex-row p-0">
                <Col
                  xs={12}
                  className="nomor-telepon-container-mobile d-flex flex-row justify-content-around align-items-center"
                >
                  <input
                    type="text"
                    id="whatsappnumb-mobile"
                    name="whatsapp"
                    placeholder={
                      props.language === "ind" ?
                      "ALAMAT EMAIL KAMU" : "YOUR EMAIL ADRESS"
                    }
                  />
                  <i
                    className="nomor-telepon-content-input-arrow-mobile fas fa-arrow-right"
                    onClick={() => {
                      setToast(true);
                    }}
                  ></i>
                </Col>
              </Col>
          </Col>
      </Row>

      <Row id="footer-logo" className="d-flex flex-column jusify-content-center align-items-center">
          <Col xs={12} className="footer-logo-content d-flex flex-column justify-content-center align-items-center">
            <img
            src={SoedjaLogo}
            alt=""
            height="30"
            className="footer-soedja-logo-mobile"
            />
            <p className="homepage-footer-logo-company-name-mobile">PT SOEMBER DJAYA MASYARAKAT | SOEDJA Copyright (c) 2020</p>
            <img
                src={BiangLala}
                alt=""
                height="30"
                className="footer-bianglala-mobile"
            />
          </Col>
      </Row>

      <CustomToast
        width={410}
        show={toast}
        transition={true}
        position="top-middle"
        message={"Fitur Belum Ready Nih"}
        subMessage={"Coba lagi nanti yah."}
        style={{ backgroundColor: "white", height: "85px" }}
        onCloseCLick={() => {
          setToast(false);
        }}
      />
      <ModalLaunchingMobile />
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = {
  ChangeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileHomePage)