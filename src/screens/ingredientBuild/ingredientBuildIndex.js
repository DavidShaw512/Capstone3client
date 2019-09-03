import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import IngredientForm from './components/ingredientBuildForm';

import './ingredientBuildIndex.css';

export default function IngredientBuild() {
    return (
        <MainLayout>
            <div className="ingredientBuild">
                <h1>Build a Custom Ingredient</h1>
                <div className="buildArea">
                    <IngredientForm/>
                </div>
            </div>
        </MainLayout>
    )
}