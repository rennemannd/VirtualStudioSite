import React from "react";
import Deveon from "./Images/Headshots/DeVeon.jpg";
import Caylem from "./Images/Headshots/Caylem.png";
import "./Team.scss";

class Team extends React.Component {

    render() {
        return (
            <html>
            <div className="card-container">
                <span className="pro">VFX</span>
                <div className={"image"}>
                    <img
                        className="round"
                        src={Deveon}
                        alt="user"/>
                </div>
                <h3>Deveon</h3>
                <h6>A place.</h6>
                <p>
                    VFX and 2D/3D animations <br/>
                    creator.
                </p>
                <div className="buttons">

                </div>
                <div className="skills">
                    <h6>Skills</h6>
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
            <div className="card-container">
                <span className="pro">VFX</span>
                <div className={"image"}>
                    <img
                        className="round"
                        src={Deveon}
                        alt="user"/>
                </div>
                <h3>Deveon</h3>
                <h6>A place.</h6>
                <p>
                    VFX and 2D/3D animations <br/>
                    creator.
                </p>
                <div className="buttons">

                </div>
                <div className="skills">
                    <h6>Skills</h6>
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

            </html>
        )
    }
}

export default Team;