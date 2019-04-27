import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './CommentBox.js';


class StoryBox extends Component {
  render() {
   
    return (
      <div className="StoryBox">
            <header className="StoryBox-header">
             <h1>Comments Section</h1>
            </header>
        <body>
         <CommentBox />
         </body>
      </div>
    );
  }
}




export default StoryBox;
