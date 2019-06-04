import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';
import Button from 'react-bootstrap/Button';
import Header from './components/Header.js';

class StoryBox extends Component {
  render() {

    return (
      <div className="root">
        <Header />
            <body>
                <CommentBox />
            </body>
        </div>
    );
  }
}




export default StoryBox;
