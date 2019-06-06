import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return(
      <div className="header">
        <div className="header-left">
              <h2 className="title">DTOURS</h2>
        </ div>
        <div className="header-right" >
                <Button variant="outline-secondary" className="navButton">
                  <h2>Home</h2>
                </Button>
                <Button variant="outline-secondary" className="navButton">
                  <h2>Content</h2>
                </Button>
                <Button  variant="outline-secondary" className="navButton">
                  <h2>Contact</h2>
                </Button>
        </div >
      </div>
    )
  };
}

export default Header;
