import React, { Component } from "react";
import Footer_logo from "../Assets/Footer_Logo.png";
import member1 from "../Assets/member1.png";
import member2 from "../Assets/member2.png";
import member3 from "../Assets/member3.png";
import member4 from "../Assets/member4.png";
import member5 from "../Assets/member5.png";
import member6 from "../Assets/member6.png";
import member7 from "../Assets/member7.png";
import member8 from "../Assets/member8.png";
import member9 from "../Assets/member9.png";
import member10 from "../Assets/member10.png";
import member11 from "../Assets/member11.png";
import member12 from "../Assets/member12.png";
import member13 from "../Assets/member13.png";
import member14 from "../Assets/member14.png";
import member15 from "../Assets/member15.png";
import member16 from "../Assets/member16.png";
import member17 from "../Assets/member17.png";
import member18 from "../Assets/member18.png";
import member19 from "../Assets/member19.png";
import member20 from "../Assets/member20.png";
import member21 from "../Assets/member21.png";
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
                    <img id="team-img" src={member1} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Ambriel Pascual</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Advocacy Coordinator</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member2} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Patricia Bojador</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Advocacy Coordinator</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member3} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Daphne Basuel</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Education and Research</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member4} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Marie Frances Pagaduan</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Deputy Director for Internal Affairs</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member5} style={{ width: "100%" }} />
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
                    <img id="team-img" src={member6} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Dunton</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Financier</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member7} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Richard Albert Nick Gonzalez</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Crisis Director</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member8} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Janis Santiago</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Logistics Officer</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member9} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Jessica Jirah Dimaandal</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Partnerships Officer</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member10} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Kiara Venice Delgado</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Memberships Coordinator</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member11} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Trixie Ann Bautista</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Partnerships</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member12} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Kayla Fernandez</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Partnerships</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member13} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Bianca Adia</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Partnerships</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member14} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Aaliyah Duran</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Public Relations</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member15} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Alexa Taay</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Partnerships</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member16} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Anne Drea Camus</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Logistics</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member17} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Charlene Joyce Uy</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Secretariat</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member18} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Jeremiah Dimasacat</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Stakeholder Engagement Officer</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member19} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Troy Angelo Miguel Bisa</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Stakeholder Engagement Officer</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member20} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Margarita Tipton</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Sponsorships and Grants Officer</i>
                    </p>
                  </div>
                </div>
                <div class="col">
                  <div class="img-container">
                    <img id="team-img" src={member21} style={{ width: "100%" }} />
                  </div>
                  <div class="text-team">
                    <br />
                    <p style={{ fontSize: "22px" }}>
                      <b>Nicole Ann Vergara</b>
                    </p>
                    <p style={{ fontSize: "18px" }}>
                      <i>Strategy and Planning Officer</i>
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
