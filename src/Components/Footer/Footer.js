import Footer_Logo from "../Assets/Footer_Logo.png";
import Footer_Facebook from "../Assets/Footer_Facebook.png";
import Footer_Gmail from "../Assets/Footer_Gmail.png";
import Footer_Instagram from "../Assets/Footer_Instagram.png";
import Footer_Twitter from "../Assets/Footer_Twitter.png";
import "../Stylesheets/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="content-container"></div>
      <footer className="footer footer--pin">
        <div className="row d-flex justify-content-center align-items-center text-center">
          <div className="col-md">
            <img
              src={Footer_Logo}
              style={{ width: "100%" }}
              className="responsive"
            />
          </div>

          <div className="d-flex flex-column col-md" id="footer">
            <h1>STREETS TO SCHOOLS</h1>
            <div className="box d-flex flex-row justify-content-center">
              <a href="mailto:streetstoschools.org@gmail.com" target="_blank">
                <img src={Footer_Gmail} className="img-fluid mx-1 rounded" />
              </a>
              <a
                href="https://www.facebook.com/StreetstoSchoolsProject/"
                target="_blank"
              >
                <img src={Footer_Facebook} className="img-fluid mx-1 rounded" />
              </a>
              <a
                href="https://www.instagram.com/streetstoschools.project/"
                target="_blank"
              >
                <img
                  src={Footer_Instagram}
                  className="img-fluid mx-1 rounded"
                />
              </a>
              <a href="#" target="_blank">
                <img src={Footer_Twitter} className="img-fluid mx-1 rounded" />
              </a>
            </div>
          </div>

          <ul className="r-footer col-md">
            <li id="footer1">
              <h2>SUPPORT</h2>
              <ul className="box">
                <li>
                  <Link to={"/donate"}>Donate Now</Link>
                </li>
                <li>
                  <Link to={"/registration"}>Partner</Link>
                </li>
                <li>
                  <Link to={"/registration"}>Volunteer</Link>
                </li>
              </ul>
            </li>
            <li id="footer1">
              <h2>CONNECT</h2>
              <ul className="box">
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contacts"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/contacts"}>FAQ</Link>
                </li>
              </ul>
            </li>
            <li id="footer1">
              <h2>DISCOVER</h2>
              <ul className="box">
                <li>
                  <Link to={"/"}>Latest Stories</Link>
                </li>
                <li>
                  <Link to={"/"}>Upcoming Events</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="b-footer">
          <p>©2022 Streets to Schools. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
