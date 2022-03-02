import React, { Component } from 'react';

class Registration extends Component {
    render() {
        return (
            <div>
                 <div classname="main_content">
          <h1 style={{fontSize: '3.5vw'}} classname="text-center">Be one of us!</h1>
        </div>
        <div classname="flex-container">
          <div>
            <a href="#">
              <img src="Images/PART.png" alt="partnership" style={{width: '100%'}} /></a>
          </div>
          <div>
            <a href="#">
              <img src="Images/VOL.png" alt="Volunteer" style={{width: '100%'}} /></a>
          </div>
        </div>
      </div>
        );
    }
}

export default Registration;