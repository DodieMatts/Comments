import React, { Component } from 'react';

class HomeBody extends Component {
  render () {
    return(
        <div className="middle-section">
              <iframe width="600" height="600" className="embed-responsive-item" title="Slaying with Galaxy Skin"
                src="https://www.youtube.com/embed/1VfduBy9NRY"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
              </iframe>
        </div>
    );
  }
}

export default HomeBody;
