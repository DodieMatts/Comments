import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import Header from './components/Header.js';
import HomeBody from './components/HomeBody.js';

class StoryBox extends Component {
  render() {

    return (
      <React.Fragment>
        <header className="header">
          <Header />
        </header>
        <div>
          <HomeBody />
        </div>

        <footer className="footer">
          <CommentBox />
        </footer>
      </React.Fragment>
    );
  }
}




export default StoryBox;
