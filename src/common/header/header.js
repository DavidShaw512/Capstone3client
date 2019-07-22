import React from 'react';

import MainMenu from './mainMenu';

import './header.css'

export default function Header() {
    return (
        <div className="headerContainer">
            <div className="headerContent">
                <h1 className="headerTitle">Sammie</h1>
                <div className="headerMenu">
                    <p className="headerMenuButton">Menu</p>
                    <MainMenu/>
                </div>
            </div>
        </div>
    )
}