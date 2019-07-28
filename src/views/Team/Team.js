import React from "react";
import "./css/rotating-card.css";
import Deveon from "./Images/Headshots/DeVeon.jpg";
import Caylem from "./Images/Headshots/Caylem.png";
import "./css/pe-icon-7-stroke.css";

class Team extends React.Component {

    render() {
        return (
            <html>
            <div className="card-container">
                <div className="card">
                    <div className="front">
                        <div className="cover">
                            <img src={Caylem}/>
                        </div>
                        <div className="user">
                            <img className="img-circle" src={Deveon}/>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h3 className="name">DeVeon</h3>
                                <p className="profession">VFX and Animation</p>

                                <p className="text-center">"I'm the new Sinatra, and since I made it here I can make it
                                    anywhere, yeah, they love me everywhere"</p>
                            </div>
                            <div className="footer">
                                <div className="rating">
                                    <i className="fa fa-mail-forward"/> Auto Rotation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="header">
                            <h5 className="motto">"To be or not to be, this is my awesome motto!"</h5>
                        </div>
                        <div className="content">
                            <div className="main">
                                <h4 className="text-center">Job Description</h4>
                                <p className="text-center">Web design, Adobe Photoshop, HTML5, CSS3, Corel and many
                                    others...</p>

                                <div className="stats-container">
                                    <div className="stats">
                                        <h4>235</h4>
                                        <p>
                                            Followers
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>114</h4>
                                        <p>
                                            Following
                                        </p>
                                    </div>
                                    <div className="stats">
                                        <h4>35</h4>
                                        <p>
                                            Projects
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="footer">
                            <div className="social-links text-center">
                                <a href="https://creative-tim.com" className="facebook"><i
    className="fa fa-facebook fa-fw"/></a>
                                <a href="https://creative-tim.com" className="google"><i
    className="fa fa-google-plus fa-fw"/></a>
                                <a href="https://creative-tim.com" className="twitter"><i
    className="fa fa-twitter fa-fw"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </html>
        )
    }
}

export default Team;