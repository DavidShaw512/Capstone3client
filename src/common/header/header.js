import React from 'react';
import { Link } from 'react-router-dom';

import MainMenu from './mainMenu';

import './header.css'

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContent">
                <h1 className="headerTitle"><Link to='/'>Sammie</Link></h1>
                <div className="headerMenu">
                    <p className="headerMenuButton">Menu</p>
                    <MainMenu/>
                </div>
            </div>
        </div>
    );
};