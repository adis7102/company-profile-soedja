import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  Row, Col
} from 'react-bootstrap';
import Navbar from "./components/Navbar";
import MobileNavbar from './components/MobileNavbar';
import HomePage from "./pages/HomePage";
import MobileHomePage from './pages/MobileHomepage';

function App() {
  useEffect(() => {
    console.log(window.innerWidth, 'INI HEIGHT')
  }, [])

  useEffect(() => {
    console.log(window.innerWidth, 'INI BARU WIDTH')
  },[window.innerWidth])
  return (
    <Router>
      <div className="App" style={{ width : window.innerWidth, maxWidth: '1440px' }}>
        {
          window.innerWidth >= 768 ? <Navbar screenWidth={`${window.innerWidth}px`} /> : <MobileNavbar screenWidth={`${window.innerWidth}px`} />
        }
        <Switch>
          <Route exact path="/" component={window.innerWidth >= 768 ?  HomePage : MobileHomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
