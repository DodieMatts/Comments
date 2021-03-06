import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header-container">
          <div className="logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44ZM8.27639 14.7044V29H12.7045C13.9547 28.9935 15.0773 28.7054 16.0722 28.136C17.0671 27.5665 17.8363 26.7647 18.3795 25.7305C18.9294 24.6963 19.2043 23.5148 19.2043 22.186V21.5282C19.2043 20.1994 18.9261 19.0147 18.3697 17.9739C17.8133 16.9266 17.0377 16.1215 16.0428 15.5586C15.0544 14.9891 13.9318 14.7044 12.675 14.7044H8.27639ZM11.2219 26.6338V17.0903H12.675C13.8336 17.0903 14.714 17.4666 15.3162 18.2194C15.9184 18.9656 16.2195 20.0652 16.2195 21.5184V22.2744C16.2064 23.6751 15.8955 24.7519 15.2867 25.5046C14.678 26.2574 13.7976 26.6338 12.6456 26.6338H11.2219ZM28.8754 25.0726L25.2033 14.7044H21.3545V29H24.3V25.0923L24.0055 18.3568L27.8543 29H29.8769L33.7355 18.347L33.441 25.0923V29H36.3963V14.7044H32.5279L28.8754 25.0726Z" fill="#EFEFEF" />
            </svg>
          </div>
          <div className="headerMenu">
            <a href="#aboutID">About</a>
            <a href="#projectID">Projects</a>
            <a href="#contactID">Contact</a>
          </div>
        </div>
      </Router>
    )
  };
}

export default Header;
