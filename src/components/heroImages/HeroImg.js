import "./HeroImgStyles.css";
import { React } from "react";

import IntroImg from "../../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt='Hero Image' />
      </div>

      <div className="content">
        <p>HI,MY NAME IS M.SOROORI. I'M A SRUM MASTER AND</p>
        <h1>WEB Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

