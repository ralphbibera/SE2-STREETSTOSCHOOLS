import React, { Component } from 'react';
import '../Stylesheets/Donate.css';
import bg from '../Assets/bg.png';

export default class Donate extends Component {
  render() {
    return (
        <div
        class="bg_image"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}>
        <div id="donate">
        <br/><br/><br/><br/><br/><br/><br/>
        <h1 className="text-center" style={{ fontSize: "3.5vw" }}>---------------DONATE FILE------------</h1><br />
        <div className="container">
            </div>
        </div>
      </div>
    )
  }
}
