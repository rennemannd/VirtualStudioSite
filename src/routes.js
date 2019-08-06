import React from 'react';
import Home from './views/Home/Home';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import AboutUs from "./views/AboutUs/AboutUs";
import {Transition, TransitionGroup} from "react-transition-group";
import {exit, play} from "./timelines";
import Particles from "react-particles-js";
import NotFound from "./views/NotFound/NotFound";
import Team from "./views/Team/Team";
import Contact from "./views/Contact/Contact";

let particlesOptions = {
    "particles": {
        "number": {"value": 99, "density": {"enable": true, "value_area": 552.4033491425909}},
        "color": {"value": "#fff9cc"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 3},
            "image": {"src": "img/github.svg", "width": 70, "height": 100}
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 2, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": false, "distance": 150, "color": "#fff9cc", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 1.5782952832645452,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"false": true, "mode": "bubble"},
            "onclick": {"enable": true, "mode": "repulse"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 1, "duration": 0.2, "opacity": 2, "speed": 0.1},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": false
};

// This exports the different routes that will be used on the page
export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <div id={'particles'}>
                    <Particles id={'particles'} params={particlesOptions}/>
                </div>
                <Switch>
                    <Route render={({location}) => {
                        const {pathname, key} = location;
                        const valid = ["/about", "/", "/not-found", "/team", "/contact", "/login"].includes(pathname);
                        console.log(pathname + "," + valid);
                        return (
                            <TransitionGroup component={null}>
                                <Transition
                                    key={key}
                                    appear={true}
                                    onEnter={(node, appears) => {play(valid ? pathname : "/not-found", node, appears)}}
                                    onExit={(node, appears) => exit(node, appears)}
                                    timeout={{enter: 750, exit: 150}}>
                                    <Switch location={location}>
                                        <Route exact path="/" component={Home}/>
                                        <Route path="/about" component={AboutUs}/>
                                        <Route path="/not-found" component={NotFound}/>
                                        <Route path={"/team"} component={Team}/>
                                        <Route path={"/contact"} component={Contact}/>
                                        <Redirect from={"*"} to={"/not-found"} component={NotFound}/>
                                    </Switch>
                                </Transition>
                            </TransitionGroup>
                        )
                    }}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
};
