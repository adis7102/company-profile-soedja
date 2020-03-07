import React, { useState, useEffect } from "react";
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import SoedjaLogo from "../assets/Group339.png";
import DrawerComponent from '../components/DrawerComponent';


function MobileNavbar(props) {
    const[open, setOpen] = useState(false)
    const[position, setPosition] = useState('left')
    const[noOverlay, setNoOverlay] = useState(false)
    
    function toggleDrawer() {
        setOpen(!open);
    }

    function closeDrawer() {
        setOpen(false);
    }

    function onDrawerClose() {
        setOpen(false);
    }
  return (
    <div style={{ width : window.innerWidth }}>
        <Navbar className="mobile-navbar d-flex flex-row align-items-center" bg="white"  fixed="top" style={{ width : window.innerWidth }}>
        <Container
          fluid
          className="d-flex justify-content-center align-items-center"
        >
          <Col xs="12" className="p-0">
            <i className="fas fa-bars" onClick={() => toggleDrawer()}></i>
          </Col>
            <img
                alt=""
                src={SoedjaLogo}
                width="140"
                // height="50"
                className="logo-navbar-mobile"
                onClick={() => toggleDrawer()}
            />
        </Container>
      </Navbar>
        <ReactDrawer
          open={open}
          position={'left'}
          onClose={onDrawerClose}
          noOverlay={false}>
          <DrawerComponent closeDrawer={onDrawerClose} />
        </ReactDrawer>
    </div>
  );
}


export default (MobileNavbar)
