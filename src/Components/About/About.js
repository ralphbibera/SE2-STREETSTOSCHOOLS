import React, { Component } from "react";
import Footer_logo from "../Assets/Footer_Logo.png";
import member from "../Assets/member.png";
import "../Stylesheets/About.css";
import bg from "../Assets/bg.png";

export default class About extends Component {
  render() {
    return (
      <div
        class="bg_image content-container"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="about">

          <div class="about-us-body">
            <div class="container-md">
              <div class="row">
                <div class="col-md-3">
                  <div class="flex-container">
                    <img id="aboutus-img" src={Footer_logo} />
                  </div>
                </div>
                <div class="col-md-9">
                  <div class="text">
                    <br />
                    <p style={{ fontSize: "20px" }}>
                      <b>Streets to Schools</b> is a youth organization actively
                      bridging children and youth in street situations by
                      amplifying the Global Goals for Sustainable Development
                      and UN Convention on the Rights of the Child. Investing in
                      the young to achieve 2030 and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-md">
              <div class="col-md-12">
                <div class="text">
                  {" "}
                  <br />
                  <h1 class="title">OUR MISSION</h1>
                  <br />
                  <p style={{ fontSize: 18 }}>
                    Showcase the significance of quality education and highlight
                    the value of lifelong learning by giving out-of-school youth
                    the invaluable opportunity to learn. By valuing rights-based
                    and needs-based approaches, Streets to Schools enables
                    out-of-school youth to go back to schools through the
                    implementation of the United Nations Sustainable Development
                    Goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="container-md">
              <div class="col-md-12">
                <div class="text">
                  <br />
                  <h1 class="title">OUR VISION</h1> <br />
                  <p style={{ fontSize: 18 }}>
                    Streets to Schools envisions itself as an avenue for all
                    stakeholders and beneficiaries to be in a continued
                    co-learning process where education is given paramount
                    importance. Furthermore, Streets to Schools hopes to go
                    beyond the sustainable development goals, highlighting
                    partnership through the SDGs to contribute to the 2030
                    agenda, and branch out from Metro Manila by sharing its
                    advocacy to young leaders.
                  </p>
                </div>
              </div>
            </div>

            <div class="container-md">
              <div class="row">
                <div class="col-xs-12 center-block text-center">
                  <div class="text">
                    <h1 class="title">
                      <b>MEET THE TEAM</b>
                    </h1>
                    <br />
                    <br />
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Qjiel Mariano</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Founder & Executive Director</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Qjiel Mariano</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Advocacy Coordinator</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Qjiel Mariano</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Founder & Executive Director</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Qjiel Mariano</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Advocacy Coordinator</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-md">
              <div class="col-md-12">
                <div class="text">
                  <h1 class="title">AWARDS & RECOGNITIONS</h1>
                  <br />
                </div>

                <ul style={{ fontSize: "18px" }} class="aboutus-recognitions">
                  <li>Winner, ESD Okayama Awards 2021</li>
                  <li>
                    Outstanding GYS Alumni Safe Space Heroes 2021 [Karapatan at
                    Kabataan Paligsahan ng Mga Maikling Pelikula]
                  </li>
                  <li>
                    2nd Place, Harvard Innovation Challenge Southeast Asia
                    Well-Being and Equity Track
                  </li>
                  <li>
                    United Nations Population Fund Kabayani Challenge Fund
                    Winner
                  </li>
                  <li>
                    Advocates' Choice Award (Inter-Pillar Category) of the SDG
                    Youth Awards in the Asia Pacific 2020
                  </li>
                  <li>Outstanding GYS Alumni Safe Space Heroes 2020</li>
                  <li>
                    People Defender of the Year, Global Institute for Youth
                    Development NYLC
                  </li>
                  <li>
                    Winner, Jesse M. Robredo Foundation Be Like Jesse Youth
                    Grant Competition [Ladders to Literacy]
                  </li>
                  <li>
                    National Finalist, 18th Ten Accomplished Youth Organization
                    (TAYO) Awards [PelikuLansangan]
                  </li>
                  <li>
                    National Finalist, 17th Ten Accomplished Youth Organization
                    (TAYO) Awards [Ladders to Literacy]
                  </li>
                  <li>Top 5, Global Youth Summit Seed Grant Competition</li>
                  <li>
                    Finalist, Jesse M. Robredo Foundation Be Like Jesse Youth
                    Grant Competition (Alitaptap)
                  </li>
                  <li>Live Screening Qualifiers, Ideas Positive 10</li>
                  <li>
                    Shortlisted, Ten Accomplished Youth Organization Awards
                    (Alitaptap)
                  </li>
                  <li>Finalist, Sikhay Youth Community Service Awards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
