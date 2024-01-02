import React from "react";

import { useState } from "react";

import Option from "./menuItem";

import "./index.css";

const menuItems = [
  { icon: "question_mark", option: "QUESTIONS" },
  { icon: "work", option: "JOBS" },
  { icon: "description", option: "DOCUMENTATION" },
  { icon: "sell", option: "TAGS" },
  { icon: "person", option: "USERS" },
  { icon: "bookmark", option: "BADGES" },
  { icon: "campaign", option: "ASK QUESTION" },
  { icon: "chat", option: "STACK EXCHANGE" },
  { icon: "inbox", option: "INBOX" },
];

const SideMenu = () => {
  // let selected = "QUESTIONS";

  const [selected, setSelected] = useState("QUESTIONS");
  return (
    <div className="sidemenu-container">
      <div>
        <div className="logo-container">
          <img
            src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
            alt="stackOverFlow"
            className="logo"
          />
        </div>
        <div className="close-menu-btn-container"></div>
        <div className="menu-items">
          <ul>
            {menuItems.map((each) => (
              <li key={each.option}>
                <Option
                  i={each.icon}
                  o={each.option}
                  s={each.option === selected}
                  c={(v) => {
                    setSelected(v);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <p>.</p>
      </div>
    </div>
  );
};

export default SideMenu;
