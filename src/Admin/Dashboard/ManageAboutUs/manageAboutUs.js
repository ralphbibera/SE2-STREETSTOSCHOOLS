import React from "react";
import "../../Stylesheets/navigation-test.css";
import "../../Stylesheets/table.css";

import logo from '../../../Admin/Assets/logo.png';

class ManageAboutUs extends React.Component{
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
                            <th style={{'text-align': 'center'}}>AWARDS AND RECOGNTIONS</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td><textarea id="aboutus-textarea"></textarea></td>
                            </tr>
                            <tr>
                                <td class="d-flex justify-content-end"><button class="action-buttons edit-btn">Edit</button></td>
                            </tr>
                        </tbody>
                    </table>    
                    </div>
                </div>
            </div>
        );
        
    }
}

export default ManageAboutUs;