import React from "react";
import "./Contact.scss";
import {NavLink} from "react-router-dom";
import * as Constants from "./config.js";
import {send} from "emailjs-com";
import {ReCaptcha} from "react-recaptcha-google";
import {loadReCaptcha} from "react-recaptcha-google";
import $ from "jquery";

class Contact extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {
            senderEmail: '',
            senderName: '',
            feedback: '',
            triedAgain: false,
            captcha: false,
            isFaded: false,
            formEmailSent: false
        }
    }

    componentDidMount() {
        loadReCaptcha();
        if (this.captcha) {
            this.captcha.reset();
        }
    }

    onLoadRecaptcha() {
        if (this.captcha)
            this.captcha.reset();
    }

    verifyCallback(recaptchaToken) {
        console.log(recaptchaToken, "<= tkn");
        this.setState({
            captcha: true,
            tkn: recaptchaToken
        });
    }

    ErrorRemove = (e) => {
        e.preventDefault();
        $('.error-wrapper').fadeOut(100);
        $('.error-message').fadeOut(100);
        this.setState({
            isFaded: true
        });
    };

    FadeIn = (e) => {
        e.preventDefault();
        if (this.state.isFaded) {
            $('.error-wrapper').fadeIn(100);
            $('.error-message').fadeIn(100);
            this.setState({
                isFaded: false
            });
        }
    };

    errorMessage(text) {
        return (
            <div className={"error-wrapper"}><span className={"error-message"} onClick={this.ErrorRemove}>&times;</span>
                <span className={"error-text"}>{text}</span></div>);
    }

    static getSVG() {
        return (
            <svg className="checkMark" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                <circle className="path circle" fill="none" stroke="#73AF55" stroke-width="6"
                        stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
                <polyline className="path check" fill="none" stroke="#73AF55" stroke-width="6"
                          stroke-linecap="round" stroke-miterlimit="10"
                          points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
            </svg>
        )
    }

    handleSubmit(event) {
        if (event !== null) {
            event.preventDefault();
            if (this.state.formEmailSent) {

                this.setState({
                    triedAgain: true
                });
                return;
            }
            this.setState({
                missingCredentials: false,
            });
            this.sendFeedback(this.state.senderName, this.state.senderEmail, this.state.feedback);
        }
    }

    missingCredentials() {

        if (this.state.senderEmail.trim() === '')
            return this.errorMessage("Please enter an e-mail address!");
        else if (this.state.senderName.trim() === '')
            return this.errorMessage("Please enter a name!");
        else if (this.state.feedback.trim().length < 16)
            return this.errorMessage("Please enter a message of at least 16 characters!");
        else if (!this.state.captcha)
            return this.errorMessage("Please complete the reCaptcha!");

        return null;
    }

    updateName(evt) {
        this.setState({
            senderName: evt.target.value
        });
    }

    updateEmail(evt) {
        this.setState({
            senderEmail: evt.target.value
        });
    }

    updateFeedback(evt) {
        this.setState({
            feedback: evt.target.value
        });
    }

    hasSubmittedMessage() {
        return this.errorMessage("You already sent a message!")
    }

    sendFeedback(name, senderEmail, feedback) {
        let missingCredentials = this.missingCredentials();
        // if credentials are not missing
        if (missingCredentials === null) {
            send(
                'default_service',
                'form_response',
                {
                    "name": name,
                    "senderEmail": senderEmail,
                    "feedback": feedback,
                    "g-recaptcha-response": this.state.tkn
                }, "user_emGxeLP1KLlsbsbA0Jpic")
                .then(() => {
                        this.setState({formEmailSent: true});
                    }
                )
                .catch(err => {
                    console.error('Failed to send feedback. Error: ', err);
                    this.setState({
                        missingCredentials: true,
                        credentialValue: this.errorMessage("Uh, that's not right... Something went wrong when you tried to send your message.")
                    });
                })
        } else
            this.setState({
                missingCredentials: true,
                credentialValue: missingCredentials
            });
    }

    render() {
        return (
            <html>
            <div>
                <NavLink to={""} onClick={this.Delay} className={"circCont"}>
                    <button className="circle" data-animation="showShadow" data-remove="3000"/>
                </NavLink>
                <head>
                    <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet'
                          type='text/css'/>

                    <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet"/>

                    <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet"/>

                    <link rel="stylesheet"
                          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>

                    <link rel="stylesheet"
                          href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
                          integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossOrigin="anonymous"/>

                    <script src="https://use.fontawesome.com/20ab91acc4.js"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>Contact</title>
                </head>

                <section id="contact">
                    <div className="contact-wrapper">
                        <h1 className="section-header">CONTACT</h1>
                        {
                            this.state.formEmailSent && this.state.triedAgain ? this.hasSubmittedMessage() : (this.state.missingCredentials ? this.state.credentialValue : null)
                        }
                        <div> {
                            this.state.formEmailSent ? Contact.getSVG() : null
                        }
                        </div>

                        {/*

                    CONTACT PAGE LEFT

                    */}
                        <div className={"form-container"}>
                            <form className="form-horizontal" role="form" method="POST">

                                <input type="text" className="input-forms" id="name" placeholder="Name" name="name"
                                       onChange={evt => this.updateName(evt)}/>

                                <input type="email" className="input-forms" id="email" placeholder="E-mail"
                                       name="email" onChange={evt => this.updateEmail(evt)}/>

                                <textarea className="form-control" rows="10"
                                          placeholder="Your message of at least 16 characters..." name="message"
                                          style={{"min-width": "400px", "min-height": "200px", "max-height": "400px"}}
                                          onChange={evt => this.updateFeedback(evt)}/>

                                <button className="btn btn-primary send-button" name="submit-button"
                                        id={"submit-button"}
                                        type="submit" value="SEND"
                                        onClick={evt => {
                                            this.handleSubmit(evt);
                                            this.FadeIn(evt);
                                        }}>
                                    <div className="_button">
                                        <i className="fa fa-send" style={{"margin-top": "8px"}}/><span
                                        className="send-text">SEND</span>
                                    </div>
                                </button>
                                <div style={{"margin-top": "50px"}}>
                                    <ReCaptcha
                                        ref={(el) => {
                                            this.captcha = el;
                                        }}
                                        size={"normal"}
                                        theme={"dark"}
                                        render={"explicit"}
                                        sitekey={Constants.site_key}
                                        onloadCallback={this.onLoadRecaptcha}
                                        verifyCallback={this.verifyCallback}
                                    />
                                </div>
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
                                                                      title="Send us an e-mail!">virtualstudiofamily@gmail.com</a></span></i>
                                </li>

                            </ul>

                            <hr className="hr"/>
                            <ul className="social-media-list">
                                {/*Facebook*/}
                                <li><a href="#" target="_blank" className="contact-icon">
                                    <i className="fa fa-facebook" aria-hidden="true"/></a>
                                </li>
                                {/*Instagram*/}
                                <a href="https://instagram.com/virtualstudioart" target="_blank">
                                    <li><a className="contact-icon">
                                        <i className="fa fa-instagram" aria-hidden="true"/></a>
                                    </li>
                                </a>
                                {/*Twitter*/}
                                <a href="https://twitter.com/_VirtualStudio_" target="_blank">
                                    <li><a href="#" target="_blank" className="contact-icon">
                                        <i className="fa fa-twitter" aria-hidden="true"/></a>
                                    </li>
                                </a>
                                {/*Discord*/}
                                <a href="https://discord.gg/MCdgmNz" target="_blank">
                                    <li>
                                        <a className="contact-icon">
                                            <i className="fa fa-discord" aria-hidden="true"/>
                                        </a>
                                    </li>
                                </a>
                            </ul>
                            <hr className="hr"/>
                        </div>

                    </div>

                </section>
            </div>
            </html>

        );
    }
}

export default Contact;