import React from "react";
import Deveon from "./Images/Headshots/DeVeon.jpg";
import Caylem from "./Images/Headshots/Caylem.jpg";
import Jon from "./Images/Headshots/jon.jpg";
import James from "./Images/Headshots/James.jpg";
import Tom from "./Images/Headshots/Tom.jpg";
import Yavuz from "./Images/Headshots/Yavuz.jpg";
import Samuel from "./Images/Headshots/Samuel.jpg";
import "./Team.scss";

class Team extends React.Component {

    render() {
        return (
            <html>
            <div className={"primary-container"}>
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">VFX</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Deveon}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Deveon</h3>
                            <h6 className={"h6"}>A place.</h6>
                            <p className={"p"}>
                                VFX and 2D/3D animations <br/>
                                creator.
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
                            <span className="pro">VEM</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Caylem}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Caylem</h3>
                            <h6 className={"h6"}>A place.</h6>
                            <p className={"p"}>
                                Video editing and <br/>
                                video editing management.
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
                            <h6 className={"h6"}>Gainesville, Florida.</h6>
                            <p className={"p"}>
                                Backend development and <br/>
                                film score music composition.
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
                {/*Samuel's card*/}
                <div className="card-container">
                    <div className={"flip-card-inner"}>
                        <div className={"flip-card-front"}>
                            <span className="pro">VEM</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={Samuel}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>Samuel</h3>
                            <h6 className={"h6"}>A place.</h6>
                            <p className={"p"}>
                                To be determined, <br/>
                                fill in later.
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
                            <h3 className={"h3"}>Yavuz</h3>
                            <h6 className={"h6"}>A.K.A Mufaya.</h6>
                            <p className={"p"}>
                                Put the quote here <br/>
                                Put it here
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
                            <h6 className={"h6"}>A place.</h6>
                            <p className={"p"}>
                                Some quote here <br/>
                                a quote goes here.
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
                            <span className="pro">VEM</span>
                            <div className={"image"}>
                                <img
                                    className="round"
                                    src={James}
                                    alt="user"/>
                            </div>
                            <h3 className={"h3"}>James</h3>
                            <h6 className={"h6"}>A place.</h6>
                            <p className={"p"}>
                                A quote or something <br/>
                                yeah, a quote.
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