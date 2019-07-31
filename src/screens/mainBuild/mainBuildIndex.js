import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import BuildInterface from './components/buildInterface';
import IngredientSidebar from './components/ingredientSidebar/ingredientSidebar';

import './mainBuildIndex.css'

export default function MainBuild() {
    return (
        <MainLayout>
            <div className="mainBuild">
                <IngredientSidebar className="sidebar breadbar" category="Bread"/>
                <IngredientSidebar className="sidebar saucebar" category="Sauces"/>
                <IngredientSidebar className="sidebar veggiesbar" category="Veggies"/>
                <IngredientSidebar className="sidebar cheesebar" category="Cheese"/>
                <IngredientSidebar className="sidebar meatbar" category="Meat"/>
                <h2>Build Your Sandwich</h2>
                <BuildInterface/>
            </div>
        </MainLayout>
    )
};