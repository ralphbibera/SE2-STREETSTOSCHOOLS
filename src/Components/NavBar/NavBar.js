import { Nav } from "react-bootstrap";
import { Link,NavLink } from "react-router-dom";
import "../Stylesheets/NavBar.css";
import logo from "../Assets/logo.png"

const NavbarComp = () => {
    return (
      <div>
        <Nav className="navbar navbar-custom navbar-light navbar-expand-lg fixed-top">
          <Link className="navbar-brand" to="/"><img
            src={logo}
            width="100"
            height="80"
            alt="STS Logo"
          /></Link>
          <button
           className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto d-flex align-items-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" spy={true} smooth={true}>
                  <a className="nav-link">Home</a>
                </NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="blog" spy={true} smooth={true}>
                  <a className="nav-link">Blog</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="registration"
                  spy={true}
                  smooth={true}
                >
                  <a className="nav-link">Partner & Volunteer</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" spy={true} smooth={true}>
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                >
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="donate" spy={true} smooth={true}>
                  <a className="btn nav-link donate-btn">Donate</a>
                </Link>
              </li>
            </ul>
          </div>
        </Nav>
      </div>
    );
}
export default NavbarComp;

