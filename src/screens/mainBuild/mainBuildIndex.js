import React from 'react';

import BuildInterface from './components/buildInterface';
import IngredientSidebar from './components/ingredientSidebar/ingredientSidebar';

import './mainBuildIndex.css'

export default function MainBuild() {
    return (
        <div className="mainBuild">
            <IngredientSidebar className="sidebar breadbar" category="Bread"/>
            <h2>Build Your Sandwich</h2>
            <BuildInterface/>
        </div>
    )
};