import React, { Component } from 'react';
import '../Stylesheets/Donate.css';
import bg from '../Assets/bg.png';
import bpi from "../Assets/bpi.png";
import gcash from "../Assets/gcash.png";
import gcash_logo from "../Assets/gcash_logo.png";
import bpi_logo from "../Assets/bpi_logo.png";

export default class Donate extends Component {
  render() {
    return (
      <div
      class="bg_image content-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover"
      }}>
        <div id="donate">
        <h1 style={{fontSize: '3.5vw'}} className="text-center">Donation Platforms</h1>
        <div className="flex-container">
          <div>
            <a data-bs-toggle="modal" data-bs-target="#gcashModal">
              <img src={gcash} alt="Gcash" style={{width: '100%'}} className="img-fluid zoom" /></a>
          </div>
          <div>
            <a data-bs-toggle="modal" data-bs-target="#bpiModal">
              <img src={bpi} alt="BPI" style={{width: '100%'}} className="img-fluid zoom" /></a>
          </div>
        </div>
        {/*GCASH Modal */}
        <div className="modal fade" id="gcashModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
            <div className="modal-content container-fluid">
              <div className="modal-header">
                <h3 className="text-center">How to Donate (GCASH)</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-lg-flex flex-row">
                <div className="d-flex align-items-center justify-content-center mr-lg-2">
                  <img src={gcash_logo} className="img-fluid" />
                </div>
                <div className="p-lg-2 mx-lg-3">
                  <h5><strong>Mobile Application</strong></h5>
                  <p>1. Scan the Barcode Using gcash Application</p>
                  <p>2. Enter the Amount</p>
                  <p>3. Lorem ipsum dolor sit amet</p>
                  <p>Kindly answer the google forms link below after donating for transparency purposes:</p>
                  <a href="https://google.forms.com" target="_blank">https://google.forms.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*BPI Modal */}
        <div className="modal fade" id="bpiModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
            <div className="modal-content container-fluid">
              <div className="modal-header">
                <h3 className="text-center">How to Donate (BPI)</h3>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body d-lg-flex flex-row">
                <div className="d-flex align-items-center justify-content-center mr-lg-2">
                  <img src={bpi_logo} className="img-fluid" />
                </div>
                <div className="p-lg-2 mx-lg-3">
                  <h5><strong>Mobile Application</strong></h5>
                  <p>1. Scan the Barcode Using gcash Application</p>
                  <p>2. Enter the Amount</p>
                  <p>3. Lorem ipsum dolor sit amet</p>
                  <p>Kindly answer the google forms link below after donating for transparency purposes:</p>
                  <a href="https://google.forms.com" target="_blank">https://google.forms.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
