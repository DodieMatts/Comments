import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import Header from './components/Header.js';
import HomeBody from './components/HomeBody.js';

class StoryBox extends Component {
  render() {

    return (
      <div className="root">
      <header>
            <Header />
      </header>

      <body>
            <HomeBody />
      </body>

      <footer>
            <CommentBox />
      </footer>
        </div>
    );
  }
}




export default StoryBox;
