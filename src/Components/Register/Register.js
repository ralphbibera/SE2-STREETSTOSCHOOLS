import React, { Component } from 'react';
import '../Stylesheets/Register.css';
import bg from '../Assets/bg.png';
import PART from '../Assets/PART.png';
import VOL from '../Assets/VOL.png';


export default class Register extends Component {
    render() {
      return (
          <div
          class="bg_image"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover"
          }}
        >
            <div className="container-register">
          <div id="register">
          <br/><br/><br/><br/><br/><br/><br/>
          <h1 style={{fontSize: "3.5vw"}} className="text-center">Be one of us!</h1>
          <div className="flex-container">
              <div>
                  <a href="#">
                      <img src={PART} alt="Partnership" style={{width:"100%"}}/>
                  </a>
              </div>
              <div>
                  <a href="#">
                      <img src={VOL} alt="Volunteer" style={{width:"100%"}}/>
                  </a>
              </div>
          </div>
          </div>
          </div>
        </div>
      )
    }
  }