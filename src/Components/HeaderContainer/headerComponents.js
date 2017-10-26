import React from 'react';
import './headerComponents.css';
import { Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


const HeaderComponents = () => (
    <Router>
        {/* <div className="row headerContainer">
                <Col xs={2} md={3}><Link to="/">Home</Link></Col>
                <Col xs={2} md={3}><Link to="Schedule">Schedule</Link></Col>
                <Col xs={2} md={3}><Link to="/Cast">Cast & Crew</Link></Col>
                <Col xs={4} md={3}><Link to="/Scenes">Scene Information</Link></Col>
        </div> */}

        <div className="navbar row headerContainer">
            <div className="navbarUser">
                <h5>Log In</h5>
                <input placeholder="username"/>
                <h5>Password</h5>
                <input placeholder="password" />
            </div>
            <div className="Logo">
                <span className="titleStyle">In Awe of Nature's Sway</span>
            </div>
            <div className="navbarLinks">
                <Link to="/">Home</Link>
                <Link to="Schedule">Schedule</Link>
                <Link to="/Cast">Cast & Crew</Link>
                <Link to="/Scenes">Scene Information</Link>
            </div>

        </div>


    </Router>                   
);

export default HeaderComponents;