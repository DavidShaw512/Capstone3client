import React from 'react';
import { Link } from 'react-router-dom';

import './mainMenu.css';

const MainMenu = (props) => {
    if (!props.show) {
        return null;
    }
    else {
        // Write if/else statement switching menu contents based on login status
        return (
            <ul className="mainMenu">
                <li><Link to='/'>New Sandwich</Link></li>
                <li><Link to='/ingredientBuild'>New Ingredient</Link></li>
                <li><Link to='/userProfile'>My Profile</Link></li>
                <li><Link to='/community'>Community</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Logout</Link></li>
            </ul>
        );
    };
};

export default MainMenu;