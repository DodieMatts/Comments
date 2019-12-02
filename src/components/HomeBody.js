import React, { Component } from 'react';
import pic from '../daytona.png';
// import SlideShow from 'SlideShow.js';

class HomeBody extends Component {
  render() {
    // var SS = <SlideShow>;
    // Console.log (SS);
return(
        <div className="middle-section">
          <div className="mastHead">
            <h1>DODIE MATTHEW</h1>
          </div>
          <section className="picSection">
      <img src={pic} width="500px" height="500px" className="picShuffle" alt="on daytona beach"/>
        <h3> Enjoy some of the Photgraphs I have taken!</h3>
          </section>
        {/* <SlideShow></SlideShow> */}
        </div>
      );
  }
}
export default HomeBody;
