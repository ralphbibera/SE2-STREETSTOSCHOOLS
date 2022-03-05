import React, { Component } from 'react';
import '../Stylesheets/Blog.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import bg from '../Assets/bg.png';
import featured_image from "../Assets/featured_image.png";
import featured_image2 from '../Assets/featured_image2.png';
import featured_image3 from '../Assets/featured_image3.jpg';
import forward_Arrow from '../Assets/forward_arrow.svg';

export default class Blog extends Component {
  render() {
    return (
      <div>
      <div id="blog">
      <div
    class="bg_image"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover"
    }}>
      <br/><br/>
      <DropdownButton id="dropdown-item-button" title="Filter">
        <Dropdown.Item as="button">Action</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
      <div class="recent1">
              <div class="card-block px-2" >
              <a href="#" style={{ textDecoration: 'none' }}>
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image} />
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </a>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image2}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image3}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image3}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div>
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image2}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div>
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image3}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div> 
              <div class="card-block px-2">
              <div id="featured_subpost1">
                  <img id="recent_img1" src={featured_image2}/>
                      <h1 id="recent_title1" >“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</h1>
                      <p id="recent_date_author1">By Qjiel Mariano | March 20, 2021</p>
                      <p id="recent_summary1" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                      <a class="btn read-btn1" href="#" >Read More</a>
              </div>
              </div>  
              <a href="#">
                <button id="more_btn1">
                  <p>More Posts</p>
                  <img
                    src={forward_Arrow}
                    style={{ height: "20px", width: "30px" }}
                  />
                </button>
              </a>
              </div>
      </div>
  </div>
  </div>
)
}
}
