import React, { Component } from 'react';

class HomeBody extends Component {
  render () {
    return(
        <div className="middle-section">
          <h3> Check out my Clips!</h3>
            <iframe width="1067" height="600" className="Fortnite" title="Slaying with Galaxy Skin"
              src="https://www.youtube.com/embed/1VfduBy9NRY"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media;
              gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    );
  }
}

export default HomeBody;
