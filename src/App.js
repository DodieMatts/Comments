import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import Header from './components/Header.js';
import HomeBody from './components/HomeBody.js';

class StoryBox extends Component {
  render() {

    return (
    
        <body>
          <header className="header">
            <Header />
      </header>

   
            <HomeBody />
      

      <footer >
            <CommentBox />
      </footer>
        </body>
    );
  }
}




export default StoryBox;
