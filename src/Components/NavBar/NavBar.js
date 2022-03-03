import React, { Component } from 'react';
import {Link} from 'react-scroll';
import {
  BrowserRouter as Router
} from "react-router-dom";
import "../Stylesheets/NavBar.css"
import sts_logo from '../Assets/sts_logo.png';

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <nav className="navbar navbar-custom navbar-light navbar-expand-lg fixed-top">
      <a className="navbar-brand" href="#"></a>
      <img src={sts_logo} width="100" height="80" alt="STS Logo"/>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto d-flex align-items-center">
      <li className="nav-item">
          <Link className="nav-link" to="home" spy={true} smooth={true}>
              <a className="nav-link-focus" href='./Components/Home.js'>Home</a>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="blog" spy={true} smooth={true}>
          <a className="nav-link-focus" href="./Components/Blog.js">Blog</a>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="register" spy={true} smooth={true}>
          <a className="nav-link-focus" href="./Components/Register.js">Partner & Volunteer</a>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="about" spy={true} smooth={true}>
          <a className="nav-link-focus" href="./Components/About.js">About Us</a>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="contact" spy={true} smooth={true}>
          <a className="nav-link-focus" href="./Components/Contacts.js">Contact Us</a>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to="donate" spy={true} smooth={true}>
          <a className="btn nav-link donate-btn" href="./Components/Donate.js" >Donate</a>
          </Link>
      </li>
      </ul>
  </div>
</nav>

</Router>

);
}
}

