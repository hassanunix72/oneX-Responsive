import React from "react";
import logo from "../onex-Assets/onex-logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";

const CustomFooter = () => {
  return (
    <div className="Footer">
      <div>
        <img src={logo} height={"auto"} width={"220rem"} alt="img" />
      </div>
      <div>
        <ul className="nav-link">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Capabilities</a>
          </li>
          <li>
            <a href="/">Career</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="/" className="icon">
          <TwitterIcon />
        </a>
        <a href="/" className="icon">
          <InstagramIcon />
        </a>
        <a href="/" className="icon">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
};

export default CustomFooter;
