import React from "react";
import Deveon from "./Images/Headshots/DeVeon.jpg";
import Caylem from "./Images/Headshots/Caylem.jpg";
import Jon from "./Images/Headshots/jon.jpg";
import James from "./Images/Headshots/James.jpg";
import Tom from "./Images/Headshots/Tom.jpg";
import Yavuz from "./Images/Headshots/Yavuz.png";
import Samuel from "./Images/Headshots/Samuel.jpg";
import Matt from "./Images/Headshots/Matt.jpg";
import "./Team.scss";
import {NavLink} from "react-router-dom";

class Team extends React.Component {

    render() {
        return (
            <html>
            <head>
                <title>Team</title>
            </head>
            <NavLink to={""} onClick={this.Delay} className={"circCont"}>
                <button className="circle" data-animation="showShadow" data-remove="3000"/>
            </NavLink>
            <div className={"primary-container"}>
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">LFX</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Deveon}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Deveon</h3>
                            <h6 className={"h6"}>U.S.A.</h6>
                            <p className={"p"}>
                                Lead VFX and 3D <br/>
                                animations creator.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Caylem's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">LVM</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Caylem}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Caylem</h3>
                            <h6 className={"h6"}>Australia</h6>
                            <p className={"p"}>
                                Lead video editor and <br/>
                                video editing manager.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Jon's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">DEV</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Jon}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Jon</h3>
                            <h6 className={"h6"}>Florida</h6>
                            <p className={"p"}>
                                Full-stack development and <br/>
                                film score music composer.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>React</li>
                                    <li>Node</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>C#</li>
                                    <li>Python</li>
                                    <li>Rust</li>
                                    <li>ES6</li>
                                    <li>Redis/Jedis</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>Discord API</li>
                                    <li>Unity C# API</li>
                                    <li>Photoshop</li>
                                    <li>Illustrator</li>
                                    <li>InDesign</li>
                                    <li>Premiere Pro</li>
                                    <li>FL Studio</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Samuel's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">VFX</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Samuel}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Samuel</h3>
                            <h6 className={"h6"}>U.K.</h6>
                            <p className={"p"}>
                                Editing, VFX, and<br/>
                                animator.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Mufaya's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">MUS</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Yavuz}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Yavuz (Mufaya)</h3>
                            <h6 className={"h6"}>Turkey</h6>
                            <p className={"p"}>
                                Sound design and music composer <br/>
                                for standalone, games, and film.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Tom's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">CEO</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Tom}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Tom</h3>
                            <h6 className={"h6"}>U.S.A.</h6>
                            <p className={"p"}>
                                CEO, video editing, and <br/>
                                lead manager.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*James's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">LMU</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={James}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>James</h3>
                            <h6 className={"h6"}>U.S.A.</h6>
                            <p className={"p"}>
                                Lead musician <br/>
                                and composer.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Matt's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">SOC</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Matt}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Matt</h3>
                            <h6 className={"h6"}>Washington</h6>
                            <p className={"p"}>
                                Social media <br/>
                                manager.
                            </p>
                        </div>
                        <div className={"flip-card-back"}>
                            <div className="skills">
                                <h3>Skills</h3>
                                <ul>
                                    <li>UI / UX</li>
                                    <li>Front End Development</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>Node</li>
                                </ul>
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