import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-main-container">
      <hr className="line" style={{ margin: "0px" }} />
      <div className="footer-menu-sec">
        <div className="menu-item-list">
          <p className="footer-menu-item">about us</p>
          <p className="footer-menu-item">tour</p>
          <p className="footer-menu-item">help</p>
          <p className="footer-menu-item">blog</p>
          <p className="footer-menu-item">chat</p>
          <p className="footer-menu-item">legal</p>
          <p className="footer-menu-item">privacy policy</p>
          <p className="footer-menu-item">advertising info</p>
          <p className="footer-menu-item">mobile</p>
          <p className="footer-menu-item">contact us</p>
          <p className="footer-menu-item">feedback</p>
        </div>

        <div className="social-links-container">
          <TwitterIcon className="s-icon" />
          <FacebookIcon className="s-icon" />
          <LanguageIcon className="s-icon" />
        </div>
      </div>
      <hr className="line" />
      <div className="info-sec">
        <div className="info-container">
          <div>
            <h4 className="info-heading">TECHNOLOGY </h4>
          </div>
          <div className="info-list">
            <div>
              <p className="footer-info-item">Stack Overflow</p>
              <p className="footer-info-item">Server Fault</p>
              <p className="footer-info-item">Super User</p>
              <p className="footer-info-item">Web applications</p>
              <p className="footer-info-item">Ask Ubuntu</p>
              <p className="footer-info-item">Webmasters</p>
              <p className="footer-info-item">Game Development</p>
              <p className="footer-info-item">TeX - LaTeX</p>
            </div>
            <div>
              <p className="footer-info-item">Programmers</p>
              <p className="footer-info-item">Unix & Linux</p>
              <p className="footer-info-item">Ask Different(Apple)</p>
              <p className="footer-info-item">WordPress Development</p>
              <p className="footer-info-item">Geographic Information Systems</p>
              <p className="footer-info-item">Electrical Engineering</p>
              <p className="footer-info-item">Android Enthisiasts</p>
              <p className="footer-info-item more">50 + more</p>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div>
            <h4 className="info-heading">LIFE / ARTS </h4>
          </div>
          <div className="info-list">
            <div>
              <p className="footer-info-item">Photography</p>
              <p className="footer-info-item">Science Fiction & Fantasy</p>
              <p className="footer-info-item">Graphic Design</p>
              <p className="footer-info-item">Movies & TV</p>
              <p className="footer-info-item">Seasoned Advice (cooking)</p>
              <p className="footer-info-item">Home Improvement</p>
              <p className="footer-info-item">Person Finance & Money</p>
              <p className="footer-info-item more">19 more</p>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div>
            <h4 className="info-heading">CULTURE/ RECREATION </h4>
          </div>
          <div className="info-list">
            <div>
              <p className="footer-info-item">English Language & Usage</p>
              <p className="footer-info-item">Skeptics</p>
              <p className="footer-info-item">Mi Yodeya (Judaism)</p>
              <p className="footer-info-item">Travel</p>
              <p className="footer-info-item">Christianity</p>
              <p className="footer-info-item">Arqade (gaming)</p>
              <p className="footer-info-item">Bicycles</p>
              <p className="footer-info-item more">21 more</p>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div>
            <h4 className="info-heading">SCIENCE</h4>
          </div>
          <div className="info-list">
            <div>
              <p className="footer-info-item">Mathematics</p>
              <p className="footer-info-item">Cross Validated (stats)</p>
              <p className="footer-info-item">Theoretical Computer Science</p>
              <p className="footer-info-item">Physics</p>
              <p className="footer-info-item">MathOverflow</p>
              <p className="footer-info-item">Chemistry</p>
              <p className="footer-info-item">Biology</p>
              <p className="footer-info-item more">5 more</p>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div>
            <h4 className="info-heading">OTHER</h4>
          </div>
          <div className="info-list">
            <div>
              <p className="footer-info-item">Stack Apps</p>
              <p className="footer-info-item">Meta Stack Exchange</p>
              <p className="footer-info-item">Area 51</p>
              <p className="footer-info-item">Stack Overflow Careers</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="line" />
      <div className="footer-bottom">
        <p>
          site design / logo 2016 stack Exchange Inc; user contributions
          licensed under cc by-sa 3.0 with attribution required
        </p>
        <p>rev 2016.8.1.3852</p>
      </div>
    </div>
  );
};

export default Footer;
