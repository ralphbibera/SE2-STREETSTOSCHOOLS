import React from "react";
import "../Stylesheets/NavBar.css";
import "../Stylesheets/navigation-test.css";
import "../Stylesheets/table.css";
import logo from "../../Admin/Assets/logo.png";

const ManageFeatured = () => {
  return (
    <div>
      <div className="sidenav">
        <img id="sidenav-logo" src={logo} alt="Logo" />
        <a className="nav-link" href="ManageBanner.js">
          Manage Banner
        </a>
        <a className="nav-link active" href="ManageFeatured.js">
          Manage Featured
        </a>
        <a className="nav-link" href="ManagePost.js">
          Manage Post
        </a>
        <a className="nav-link" href="ManageArchives.js">
          Manage Archives
        </a>
        <a className="nav-link" href="ManageComments.js">
          Manage Comments
        </a>
        <a className="nav-link" href="ManageAboutUs.js">
          Manage About Us
        </a>
        <a className="nav-link" href="ManageRegistration.js">
          Manage Registration
        </a>
        <a className="nav-link" href="ManageDonation.js">
          Manage Donation
        </a>
        <a className="nav-link" href="ManageRecords.js">
          Manage Records
        </a>
        <a className="nav-link" href="change-password.js">
          Change Password
        </a>
        <a className="nav-link" href="logout.js">
          Log Out
        </a>
      </div>
      <div className="main">
        <div className="container">
          <h1 style={{ "font-size": "25px", "font-weight": "bold" }}>
            FEATURED POST
          </h1>
          <table>
            <thead>
              <th>ID</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th colspan="2">ACTIONS</th>
            </thead>
            <tbody style={{ "font-size": "15px" }} />
            <tr>
              <td>1</td>
              <td>
                <img
                  id="featured-img"
                  src={require("Images/featured_image.png")}
                />
              </td>
              <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
              <td>
                <button className="action-buttons edit-btn">Edit</button>
              </td>
              <td>
                <button className="action-buttons delete-btn">Delete</button>
              </td>
            </tr>
          </table>

          <h1 style={{ "font-size": "25px", "font-weight": "bold" }}>
            SUBFEATURED POST
          </h1>
          <table>
            <thead>
              <th>ID</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th colspan="2">ACTIONS</th>
            </thead>
            <tbody style={{ "font-size": "15px" }} />
            <tr>
              <td>1</td>
              <td>
                <img
                  id="subfeatured-img"
                  src={require("Images/featured_image.png")}
                />
              </td>
              <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
              <td>
                <button className="action-buttons edit-btn">Edit</button>
              </td>
              <td>
                <button className="action-buttons delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  id="subfeatured-img"
                  src={require("Images/featured_image.png")}
                />
              </td>
              <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
              <td>
                <button className="action-buttons edit-btn">Edit</button>
              </td>
              <td>
                <button className="action-buttons delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  id="subfeatured-img"
                  src={require("Images/featured_image.png")}
                />
              </td>
              <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
              <td>
                <button className="action-buttons edit-btn">Edit</button>
              </td>
              <td>
                <button className="action-buttons delete-btn">Delete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageFeatured;
