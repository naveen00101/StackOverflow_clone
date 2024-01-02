import React, { Component } from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import "./index.css";
import { Icon } from "@mui/material";
import NetworkQuestions from "../networkQuestions";

export class JobsSide extends Component {
  render() {
    return (
      <div className="jobs-bg-container">
        <div>
          <div className="side-heading-sec">
            <p className="side-overlay">Looking for ...</p>
            <h2 className="side-background-text">jobs</h2>
          </div>

          <div className="job-sec">
            <div className="check-container">
              <div className="round-check"> </div>
              <div className="v-line"></div>
              <div className="round-check"> </div>
              <div className="v-line"></div>
              <div className="round-check">
                <DoneOutlinedIcon
                  style={{ color: "#48a4e0", fontSize: "17px" }}
                />
              </div>
              <div className="v-line"></div>
            </div>

            <div className="job-list">
              <div className="job">
                <h4 className="job-title">Front End Developer with Angular</h4>
                <p className="company-name">WalletHub</p>
                <div className="loc-container">
                  <div className="office-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      location_on
                    </Icon>
                    <p className="loc">washington, DC</p>
                  </div>

                  <div className="work-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      public
                    </Icon>
                    <p className="loc">Remote</p>
                  </div>
                </div>
                <div className="tag-container">
                  <p className="tags">angular js</p>

                  <p className="tags">cordova</p>
                </div>
                <hr className="line-1" />
              </div>

              <div className="job">
                <h4 className="job-title">Senior iOS/ iPhone Engineer</h4>
                <p className="company-name">Perk.com INC.</p>
                <div className="loc-container">
                  <div className="office-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      location_on
                    </Icon>
                    <p className="loc">Benguluru, India</p>
                  </div>

                  <div className="work-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      public
                    </Icon>
                    <p className="loc">In Office</p>
                  </div>
                </div>
                <div className="tag-container">
                  <p className="tags">iOS</p>

                  <p className="tags">iPhone</p>
                </div>
                <hr className="line-1" />
              </div>

              <div className="job">
                <h4 className="job-title">Software Engineer</h4>
                <p className="company-name">SparkNET Technologies</p>
                <div className="loc-container">
                  <div className="office-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      location_on
                    </Icon>
                    <p className="loc">No Location</p>
                  </div>

                  <div className="work-loc-container">
                    <Icon style={{ fontSize: "16px" }} className="icon-1">
                      public
                    </Icon>
                    <p className="loc">Remote</p>
                  </div>
                </div>
                <div className="tag-container">
                  <p className="tags">angular js</p>

                  <p className="tags">cordova</p>
                </div>
                <hr className="line-1" />
                <div>
                  <p
                    style={{
                      color: "#48a4e0",
                      fontWeight: "500",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    VIEW ALL JOBS
                    <span>
                      <NavigateNextRoundedIcon />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <NetworkQuestions />
        </div>
      </div>
    );
  }
}

export default JobsSide;
