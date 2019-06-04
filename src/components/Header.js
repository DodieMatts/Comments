import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

class Header extends Component {
  render() {
    return(
      <div className="header">
              <h2 className="title">DTOURS</h2>
                <Button className="navButton">
                  <h2>Home</h2>
                </Button>
                <Button className="navButton">
                  <h2>Content</h2>
                </Button>
                <Button  className="navButton">
                  <h2>Contact</h2>
                </Button>
      </div>
    )
  };
}

export default Header;
