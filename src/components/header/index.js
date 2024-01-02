import React from "react";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SupportIcon from "@mui/icons-material/Support";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TvIcon from "@mui/icons-material/Tv";

import "./index.css";

const Header = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="sec-1">
          <IconButton>
            <MenuIcon />
          </IconButton>

          <IconButton>
            <SearchIcon />
          </IconButton>

          <input type="search" className="searchBox" placeholder="Search" />
        </div>
        <div className="sec-2">
          <button className="btn-1">
            <SupportIcon style={{ fontSize: "22px" }} className="icon" />
            <p>Help</p>
          </button>

          <button className="btn-1">
            <TvIcon className="icon" style={{ fontSize: "22px" }} />
            <p>Tour</p>
          </button>

          <button className="btn-1">
            <div className="profile-pic-container">
              <img
                src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
                alt="profile pic"
                className="profile-pic"
              />
            </div>
            <ExpandMoreIcon style={{ fontSize: "22px" }} />
          </button>
        </div>
      </nav>
      {/* <hr /> */}
    </>
  );
};

export default Header;
