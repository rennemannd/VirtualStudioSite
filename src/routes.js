import React from 'react';
import Home from './views/Home/Home';
import NotFound from './views/NotFound/NotFound';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import AboutUs from "./views/AboutUs/AboutUs";
import {Transition, TransitionGroup} from "react-transition-group";
import {exit, play} from "./timelines";

// This exports the different routes that will be used on the page
export const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route render={({location}) => {
                        const {pathname, key} = location;

                        return (
                            <TransitionGroup component={null}>
                                <Transition
                                    key={key}
                                    appear={true}
                                    onEnter={(node, appears) => play(pathname, node, appears)}
                                    onExit={(node, appears) => exit(node, appears)}
                                    timeout={{enter: 750, exit: 150}}
                                >
                                    <Switch location={location}>
                                        <Route exact path="/" component={Home}/>
                                        <Route path="/about" component={AboutUs}/>
                                        <Route path="/not-found" component={NotFound}/>
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
