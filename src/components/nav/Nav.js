import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import Contact from "../contact/Contact";
import Home from "../homePage/HomePage";
import GameDetails from "../gameData/GameDetails";


function Nav( name, rating, released, background_image, id ) {
    return( 
        <Router>
            <nav>
                <ul>
                    <li className="logo">
                        <NavLink to="/"><h1>GamePage</h1></NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/game/:id">Details</NavLink>
                    </li>
                </ul>
            </nav>
        <Switch>
            <Route path="/game/:id"  exact component={GameDetails} />
            
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            
        </Switch>
        
        </Router>
    
    )
};

export default Nav