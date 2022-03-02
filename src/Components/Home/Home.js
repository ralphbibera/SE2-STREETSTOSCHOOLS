import React, { Component } from 'react';
import '../Stylesheets/Home.css';
import bg from '../Assets/bg.png';

export default class Home extends Component {
  render() {
    return (
        <div
        class="bg_image"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}>
       <div className="container">
          <div className="featured">
          <a href="#" style={{ textDecoration: 'none' }}>
          <div className="featured_container_1">
        <div id="home">
        <br/><br/><br/><br/><br/>
        <img id="featured_img" src="./Images/featured_image.png" alt="featured pic" />
        <h1 id="featured_title" style={{  textAlign: 'center'}}>“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
        <p id="featured_date_author" style={{  textAlign: 'center'}}>By Qjiel Mariano | March 20, 2021</p>
        <p id="featured_summary" style={{  textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          </div>
          </a>
          <div className="featured_container_2" >
          <a href="#" style={{ textDecoration: 'none' }}>
          <div id="featured_subpost">
          <img id="featured_sub_img" src="./Images/featured_sub_image.png" alt='sub_img'/>
          <div id="featured_sub_text">
          <h1 id="subfeatured_title" >From the Community, For the Community</h1>
          <p id="subfeatured_date_author">By Qjiel Mariano | March 20, 2021</p>
          </div>
          </div>
          </a>
  
          <a href="#" style={{ textDecoration: 'none' }}>
          <div id="featured_subpost">
          <img id="featured_sub_img" src="./Images/featured_sub_image.png" alt='sub_img'/>
          <div id="featured_sub_text">
          <h1 id="subfeatured_title">Karapatan at Kabataan: Paligsahan Ng Mga Maikling Pelikula</h1>
              <p id="subfeatured_date_author">By Qjiel Mariano | March 20, 2021</p>
          </div>
          </div>
          </a>
  
          <a href="#" style={{ textDecoration: 'none' }}>
          <div id="featured_subpost">
          <img id="featured_sub_img" src="./Images/featured_sub_image.png" alt='sub_img' />
          <div id="featured_sub_text">
          <h1 id="subfeatured_title">Paligsahan Ng Mga Maikling Pelikula</h1>
              <p id="subfeatured_date_author">By Qjiel Mariano | March 20, 2021</p>
          </div>
          </div>
          </a>
          </div>
          </div>
  
          <br/>
          <h1 className="text-left" style={{ fontSize: 38.4}}>RECENT POSTS</h1>
          <div className="recent">
                  <div className="recent_card">
                      <img id="recent_img" src="./Images/featured_sub_image.png"/>
                      <div id="recent_text">
                          <h1 id="recent_title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                          <p id="recent_date_author">By Qjiel Mariano | March 20, 2021</p>
                          <p id="recent_summary">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <a className="btn read-btn" href="content.html">Read More</a>
                          </div>
                      </div>
  
                      <div className="recent_card">
                      <img id="recent_img" src="./Images/featured_sub_image.png"/>
                      <div id="recent_text">
                          <h1 id="recent_title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                          <p id="recent_date_author">By Qjiel Mariano | March 20, 2021</p>
                          <p id="recent_summary">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <a className="btn read-btn" href="#">Read More</a>
                      </div>
                      </div>
  
                      <div className="recent_card">
                      <img id="recent_img" src="./Images/featured_sub_image.png"/>
                      <div id="recent_text">
                          <h1 id="recent_title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                          <p id="recent_date_author">By Qjiel Mariano | March 20, 2021</p>
                          <p id="recent_summary">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <a className="btn read-btn" href="#">Read More</a>
                      </div>
                      </div>
  
                      <div className="recent_card">
                      <img id="recent_img" src="Images\featured_sub_image.png"/>
                      <div id="recent_text">
                          <h1 id="recent_title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                          <p id="recent_date_author">By Qjiel Mariano | March 20, 2021</p>
                          <p id="recent_summary">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua.</p>
                          <a className="btn read-btn" href="#">Read More</a>
                      </div>
                  </div>
                  <a href="blog.html"><button id="more_btn">
                          <p>More Posts</p><img src="./Images/forward_Arrow.svg" style={{"height" : "20px", "width" : "30px"}}/>
                      </button></a>
  
           </div>
          </div>
        </div>
      );
    }
  }