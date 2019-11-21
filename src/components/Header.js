import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Home from '../Home.js';
import Contact from '../Contact.js';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


class Header extends Component {
  render() {
    return(
      <Router>
      <div className="header-left-right-container">
        <div className="header-left">
              <h2 className="title">DTOURS</h2>
        </ div>
        <div className="header-right" >
          <Link to="/Home">
                <Button variant="outline-secondary" className="navButton" href="../Home.js">
                  <h2>Home</h2>
                </Button>
          </Link>
                <Button variant="outline-secondary" className="navButton" href="../Content.js">
                  <h2>Content</h2>
                </Button>
          <Link to="/Contact">
                <Button  variant="outline-secondary" className="navButton">
                  <h2>Contact</h2>
                </Button>
          </Link>
        </div >
          
        {
          <Switch> 
            <Route path='/Home'>
              <Home />
            </Route>
            <Route path="Contact">
              <Contact />
            </Route>
          </Switch>
        }
      </div>
      </Router>
    )
  };
}

export default Header;
