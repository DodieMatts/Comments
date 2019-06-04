import React, { Component } from 'react';
import Header from './components/Header.js'


class FirstPage extends Component {
  render() {
    return(
      <div className="FirstPage">
          <Header />

          <body>
          <p> this is a test </p>
          </body>

          <footer>
          </footer>
      </div>
    );
  }
}

export default FirstPage;
