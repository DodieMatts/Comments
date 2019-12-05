import React, { Component } from 'react';
import pic from '../daytona.png';
import reactLogo from '../react-logo.png';
import logos from '../HTML-CSS-JS-logo.png';
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
        <div className="siteInfo">
            <h3>This site was built using these technologies!</h3>
      <img src={reactLogo} width="450px" height="250px" alt="on daytona beach" />
      <img src={logos} width="450px" height="250px" alt="on daytona beach" />
      
        </div>
    </div>
      
      );
  }
}
export default HomeBody;
 