import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Stylesheets/BootstrapCarousel.css';
import bg from '../Assets/bg.png';
import c1 from '../Assets/c1.png';
import c2 from '../Assets/c2.png';
import c3 from '../Assets/c3.png';

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
              <img src={c1} className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={c2} className="d-block w-100 h-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src={c3} className="d-block w-100 h-100" alt="..."/>
            </div>
            </div>
      </div>
    </div>
      )
    }
  }
  export default BootstrapCarousel;
  