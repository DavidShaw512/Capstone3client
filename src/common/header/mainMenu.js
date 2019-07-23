import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './mainMenu.css';

const MainMenu = () => {
    // write a function that hides the menu, to be applied to the close button

    return (
        <Router>
            <ul className="mainMenu">
                <li><Link to='/'>Build</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/userProfile'>My Profile</Link></li>
                <li><Link to='/community'>Community</Link></li>
                <li><Link to='/login'>Logout</Link></li>
            </ul>
        </Router>
    );
};

export default MainMenu;