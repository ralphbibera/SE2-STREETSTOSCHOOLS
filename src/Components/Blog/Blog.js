import React, { Component } from 'react';
import '../Stylesheets/Blog.css';
import bg from '../Assets/bg.png';
import featured_image from "../Assets/featured_image.png";
import featured_image2 from '../Assets/featured_image2.png';
import featured_image3 from '../Assets/featured_image3.jpg';
import forward_Arrow from '../Assets/forward_arrow.svg';

export default class Blog extends Component {
  render() {
    return (
        <div
        class="bg_image"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}>
        <div id="blog">
        <br/><br/><br/><br/>
        <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      Filter
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a className="dropdown-item" >Action</a></li>
      <li><a className="dropdown-item">Another action</a></li>
      <li><a className="dropdown-item" >Something else here</a></li>
    </ul>
  </div>


<br/>
        <section className="blog col-md">
            <div className="blog-container" > 
              <div className="blog-box zoom">
                <div className="blog-img">
                <img src={featured_image} />
                </div>
                <div className="blog-text">
                <a href={"#"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="btn read-btn" href={"#"}>Read More</a>
                </div>
              </div>
              <div className="blog-box zoom">
          
                <div className="blog-img">
                <img src={featured_image2} />
                </div>
          
                <div className="blog-text">
                <a href={"#"} className="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="btn read-btn" href={"#"}>Read More</a>
                </div>
          
              </div>
          
              <div className="blog-box zoom">
          
                <div className="blog-img">
                <img src={featured_image3} />
                </div>
          
                <div className="blog-text" >
                <a href={"#"} class="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="btn read-btn" href={"#"}>Read More</a>
                </div>
          
              </div>
              <div className="blog-box zoom">
          
                <div className="blog-img">
                <img src={featured_image} />
                </div>
          
                <div className="blog-text">
                <a href={"#"} className="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a class="btn read-btn" href={"#"}>Read More</a>
                </div>
          
              </div>
          
          
              <div className="blog-box zoom">
          
                <div className="blog-img">
                <img src={featured_image3} alt='featured_image3'/>
                </div>
          
                <div className="blog-text">
                <a href={"#"} className="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="btn read-btn" href={"#"}>Read More</a>
                </div>
          
              </div>
              <div className="blog-box zoom">
          
                <div className="blog-img">
                <img src={featured_image} alt='featured_image' />
                </div>
          
                <div className="blog-text">
                <a href={"#"} className="blog-title">“Winner sa Life” with Winnie Cordero on DZMM TeleRadyo</a>
                <span>By Qjiel Mariano | March 20, 2021</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a className="btn read-btn" href={"#"}>Read More</a>
                </div>
          
              </div>

            </div>
            <a href={"#"}><button id="more_btn"><p>More Posts</p><img src={forward_Arrow} style={{width: '30px', height: '20px' }}/></button></a>
                            
          </section>
          </div>
        </div>
    )
  }
}
 