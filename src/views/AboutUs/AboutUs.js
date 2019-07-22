import React, {Component} from 'react';
import './AboutUs.scss';
import {NavLink} from "react-router-dom";
import $ from 'jquery';

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

    render() {
        return (
            <html className={'about-us'}>
                <NavLink to={""} className={"circCont"}>
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
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    Wowwwwww
                    </span>
                </div>
            </div>
            </html>
        )
    }
}

export default AboutUs;
