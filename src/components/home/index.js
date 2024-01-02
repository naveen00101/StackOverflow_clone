import React, { Component } from "react";

import Header from "../header";

import SideMenu from "../sideMenu";

import QuestionsSection from "../sections/questions";

import "./index.css";
import JobsSide from "../jobsSide";
import Footer from "../footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="bg-container">
          <SideMenu className="side-menu" />
          <div className="main-container">
            <Header className="line-t" />

            <hr className="line-t" />
            <div className="sub-container-1">
              <QuestionsSection className="q-sec" />
              <JobsSide className="j-sec" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
