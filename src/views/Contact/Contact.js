import React from "react";
import "./Contact.scss";
import {NavLink} from "react-router-dom";

class Contact extends React.Component {
    render() {
        return (
            <html>
            <NavLink to={""} onClick={this.Delay} className={"circCont"}>
                <button className="circle" data-animation="showShadow" data-remove="3000"/>
            </NavLink>
            <head>
                <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet' type='text/css'/>

                <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet"/>

                <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet"/>

                <link rel="stylesheet"
                      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>


                <script src="https://use.fontawesome.com/20ab91acc4.js"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Contact</title>
            </head>

            <section id="contact">

                <div className="contact-wrapper">

                    <h1 className="section-header">CONTACT</h1>

                    {/*

                    CONTACT PAGE LEFT

                    */}
                    <div className={"form-container"}>
                        <form className="form-horizontal" role="form" method="post" action="contact.php">

                            <input type="text" className="input-forms" id="name" placeholder="NAME" name="name"/>

                            <input type="email" className="input-forms" id="email" placeholder="EMAIL" name="email"/>

                            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message"
                                      style={{"min-width": "400px", "min-height": "200px", "max-height": "400px"}}/>

                            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                                <div className="_button">
                                    <i className="fa fa-paper-plane" style={{"margin-top": "8px"}}/><span
                                    className="send-text">SEND</span>
                                </div>
                            </button>
                        </form>
                    </div>

                    {/*

                    CONTACT PAGE RIGHT

                    */}

                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span
                                className="contact-text place">City | State-name</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span
                                className="contact-text phone"><a href="tel:1-555-555-5555" title="Call us!">+1 (555) 555-5555</a></span></i>
                            </li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span
                                className="contact-text gmail"><a href="mailto:virtualstudiofamily@gmail.com"
                                                                  title="Send us an e-mail!">horizonman34@gmail.com</a></span></i>
                            </li>

                        </ul>

                        <hr className="hr"/>
                        <ul className="social-media-list">
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-facebook" aria-hidden="true"/></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-instagram" aria-hidden="true"/></a>
                            </li>
                            <li><a href="#" target="_blank" className="contact-icon">
                                <i className="fa fa-twitter" aria-hidden="true"/></a>
                            </li>
                        </ul>
                        <hr className="hr"/>
                    </div>

                </div>

            </section>
            </html>

        );
    }
}

export default Contact;