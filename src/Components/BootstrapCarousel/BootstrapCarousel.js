import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/BootstrapCarousel.css';
import bg from '../Assets/bg.png';

export class BootstrapCarousel extends Component {
    render() {
      return (
        <div
        class="bg_image"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}
      >
      <div id="carouselExampleControls" className="carousel slide justify-content-center align" data-bs-ride="carousel">
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./Images/c1.png" className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="./Images/c2.png" className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./Images/c3.png" className="d-block w-100 h-100" alt="..."/>
            </div>
            </div>
      </div>
    </div>
      )
    }
  }
  export default BootstrapCarousel;
  