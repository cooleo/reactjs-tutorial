import React, {Component} from 'react';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>

                <Route exact path="/Home" render={() => <Home/>}/>
                <Route exact path="/About" render={() => <About/>}/>
                <Route exact path="/Contact" render={() => <Contact/>}/>
            </Router>
        );
    }
}
