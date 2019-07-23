import React, {Component} from 'react';
import './AboutUs.scss';
import {NavLink} from "react-router-dom";
import $ from 'jquery';
import '../Home/Fonts/stylesheet.css';

class AboutUs extends Component {

    componentWillMount() {
        $('.circle').on('click', function () {
                let animClass = $(this).data('animation');
                let removeTime = $(this).data('remove');
                if ($(this).hasClass(animClass)) {
                    $(this).removeClass(animClass);
                } else {
                    $(this).addClass(animClass);
                    if (typeof removeTime != 'undefined') {
                        let el = $(this);
                        setTimeout(function () {
                            el.removeClass(animClass);
                        }, removeTime);
                    }
                }
            }
        );
    }

    Delay = (e) => {
        let cardAnim = {
            '-webkit-animation': '.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) reverseAnimateHeight',
            '-moz-animation': '.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) reverseAnimateHeight',
            '-o-animation': '.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) reverseAnimateHeight',
            'animation': '.5s cubic-bezier(0.165, 0.840, 0.440, 1.000) reverseAnimateHeight', /* easeOutQuart */
            'height': '0'
        };
        $('.card').css(cardAnim);
        $('.content').fadeOut(100);
        e.preventDefault();
        setTimeout(() => {
            this.props.history.push('')
        }, 500)
    };

    render() {
        return (
            <html>
            <NavLink to={""} onClick={this.Delay} className={"circCont"}>
                <button className="circle" data-animation="showShadow" data-remove="3000"/>
            </NavLink>
            <head>
                <title>
                    About Us
                </title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"
                        type="text/javascript"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"/>
            </head>
            <div>

                <div className={"card"}>
                    <span className={"content"}>
                        <h1 className={"header"}>Virtual Studio</h1>
                        <hr width={"90%"} align={"center"}/>
                            <div className="divider"/>
                                 Our goal at Virtual Studio is to bring you the highest quality content for whatever videos you require. Need a music video? We've got you covered. Want to tell people about your new business with an explainer video? Come on in! Want a cool action video full of guns and booms and things? You bet. Whatever video you need, we'll make it better.
                            <div className="divider"/>
                        <hr width={"90%"} align={"center"}/>
                    </span>
                </div>
            </div>
            </html>
        )
    }
}

export default AboutUs;
