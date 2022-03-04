import React from "react";
import "../../Stylesheets/navigation-test.css";

import "../../Stylesheets/table.css";
import logo from '../../../Admin/Assets/logo.png';

class ManageComments extends React.Component{
    render() {
        return(
            <div> 
                <div class="sidenav">
        <img id="sidenav-logo"src={logo} alt="Logo"/>
        
        <a class="nav-link" href ="Admin/Dashboard/manage-banner.js">Manage Banner</a>
            <a class="nav-link" href ="Admin/Dashboard/manage-featured.js">Manage Featured</a>
            <a class="nav-link" href ="Admin/Dashboard//manage-post.js">Manage Post</a>            
            <a class="nav-link" href ="Admin/Dashboard/manage-archives.js">Manage Archives</a>
            <a class="nav-link active" href ="Admin/Dashboard/ManageComments/manage-comments.js">Manage Comments</a>
            <a class="nav-link" href ="Admin/Dashboard/ManageAboutUs/manage-aboutus.js">Manage About Us</a>
            <a class="nav-link" href ="Admin/Dashboard/manage-registration.js">Manage Registration</a>
            <a class="nav-link" href ="Admin/Dashboard/manage-donation.js">Manage Donation</a>
            <a class="nav-link" href ="Admin/Dashboard/manage-records.js">Manage Records</a>
            <a class="nav-link" href ="Admin/Dashboard/change-password.js">Change Password</a>
            <a class="nav-link" href ="Admin/Dashboard/logout.js">Log Out</a>
   </div>
   <div class="main">
        <div class="top-space container">

        </div>
        <div class="container">
            <table>
                <thead>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>RESPONSE</th>
                    <th>DATE</th>
                    <th>ACTIONS</th>
                </thead>
                <tbody style={{'font-size': '15px'}} />
                    <tr>
                        <td>1</td>
                        <td>Mark Allen Cruz</td>
                        <td>mariaeme@gmail.com</td>
                        <td>happy wife, happy life</td>
                        <td>May 12, 2021</td>
                        <td><button class="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mark Allen Cruz</td>
                        <td>mariaeme@gmail.com</td>
                        <td>happy wife, happy life</td>
                        <td>May 12, 2021</td>
                        <td><button class="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mark Allen Cruz</td>
                        <td>mariaeme@gmail.com</td>
                        <td>happy wife, happy life</td>
                        <td>May 12, 2021</td>
                        <td><button class="action-buttons delete-btn">Delete</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Mark Allen Cruz</td>
                        <td>mariaeme@gmail.com</td>
                        <td>happy wife, happy life</td>
                        <td>May 12, 2021</td>
                        <td><button class="action-buttons delete-btn">Delete</button></td>
                    </tr>   
                <tbody/>


            </table>

        </div>
   </div>
            </div>
        );
        
    }
}

export default ManageComments;