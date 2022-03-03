import React, { Component } from "react";
import "../Stylesheets/Content.css";
import content_img from "../Assets/content_img.png";
import bg from '../Assets/bg.png';

class Content extends Component {
  render() {
    return (
      <div
      class="bg_image content-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover"
      }}>
        <div className="content-body">
          <div className="container-md">
            <h1 className="content-title" style={{ fontStyle: "5vw" }}>
              From the Community, For the Community
            </h1>
            <p className="content-author-date" style={{ fontStyle: "1vw" }}>
              By Qjiel Mariano | March 20, 2021
            </p>

            <img src={content_img} style={{ width: "100%" }} />

            <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p className="content-paragraph" style={{ fontStyle: "3vw" }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <hr className="content-line" />
            <h1 className="content-comment-header" style={{ fontStyle: "2vw" }}>
              Comments
            </h1>
            <div className="content-section-comment">
              <h1 style={{ fontStyle: "2vw" }} className="content-name">
                Juan Dela Cruz
              </h1>
              <p style={{ fontStyle: "2vw" }} className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
                pariatur.
              </p>
            </div>
            <br />
            <div className="content-section-comment">
              <h1 style={{ fontStyle: "2vw" }} className="content-name">
                Juan Dela Cruz
              </h1>
              <p style={{ fontStyle: "2vw" }} className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
                pariatur.
              </p>
            </div>
            <br />
            <div className="content-section-comment">
              <h1 style={{ fontStyle: "2vw" }} className="content-name">
                Juan Dela Cruz
              </h1>
              <p style={{ fontStyle: "2vw" }} className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
                pariatur.
              </p>
            </div>
            <br />
            <div className="content-section-comment">
              <h1 style={{ fontStyle: "2vw" }} className="content-name">
                Juan Dela Cruz
              </h1>
              <p style={{ fontStyle: "2vw" }} className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, nulla
                pariatur.
              </p>
            </div>
            <h1 className="content-leave-header" style={{ fontStyle: "2vw" }}>
              Leave a comment
            </h1>
            <form>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="input-comment"
                  placeholder="Write a comment..."
                  defaultValue={""}
                />
              </div>
              <div className="form-group row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    className="form-control"
                    id="name"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row gy-3">
                <div className="col-sm-3">
                  <button type="button" className="btn btn-cancel">
                    Cancel
                  </button>
                </div>
                <div className="col-sm-3">
                  <button className="btn btn-submit" type="submit">
                    Post
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
