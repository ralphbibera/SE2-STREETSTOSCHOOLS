import React from "react";
import "../Stylesheets/navigation-test.css";
import "../Stylesheets/NavBar.css";
import "../Stylesheets/table.css";
import logo from '../../Admin/Assets/logo.png';

class ManageArchives extends React.Component{
    render(){
        return(
        <div>

<div className="sidenav">
<img id="sidenav-logo"src={logo} alt="Logo"/>
        {/* <img id="sidenav-logo"src= "./Admin/Assets/logo.png"/> */}
        <a className="nav-link" href ="manageBanner.js">Manage Banner</a>
            <a className="nav-link" href ="manageFeatured.js">Manage Featured</a>
            <a className="nav-link" href ="manage-post.js">Manage Post</a>            
            <a className="nav-link active" href ="manageArchives.js">Manage Archives</a>
            <a className="nav-link" href ="manage-comments.js">Manage Comments</a>
            <a className="nav-link" href ="manage-aboutus.js">Manage About Us</a>
            <a className="nav-link" href ="manage-registration.js">Manage Registration</a>
            <a className="nav-link" href ="manage-donation.js">Manage Donation</a>
            <a className="nav-link" href ="manage-records.js">Manage Records</a>
            <a className="nav-link" href ="change-password.js">Change Password</a>
            <a className="nav-link" href ="logout.js">Log Out</a>
   </div>
   <div className="main">
        <div className="top-space container">

        </div>
        <div className="container">
            <table>
                <thead>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>TITLE</th>
                    <th colspan="2">ACTIONS</th>
                </thead>
                <tbody style={{'font-size': '15px'}}/>
                    <tr>
                        <td>1</td>
                        <td><img id="post-img" src={require("../Assets/featured_image.png")}/></td>
                        <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
                        <td><button className="action-buttons edit-btn">Restore</button></td>
                        <td><button className="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><img id="post-img" src={require("../Assets/featured_image.png")}/></td>
                        <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
                        <td><button className="action-buttons edit-btn">Restore</button></td>
                        <td><button className="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><img id="post-img" src={require("../Assets/featured_image.png")}/></td>
                        <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
                        <td><button className="action-buttons edit-btn">Restore</button></td>
                        <td><button className="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><img id="post-img" src={require("../Assets/featured_image.png")}/></td>
                        <td>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</td>
                        <td><button className="action-buttons edit-btn">Restore</button></td>
                        <td><button className="action-buttons delete-btn">Delete</button></td>
                    </tr>
                <tbody/>


            </table>

        </div>
   </div>

        </div>

);
}
}

export default ManageArchives;