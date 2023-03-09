import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import React1 from "../../assets/project2.png"
import msp from "../../assets/ms.jpg"
import React2 from "../../assets/react2.webp"

export const AboutContent = () => {


    return (
        <div className="about">
            <div className="left">
                <img src={msp} className="img" alt="true" />
                <h1>My Name is M.Soroori</h1>
                <p>I am a web Developer And Scrum Master.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )



}