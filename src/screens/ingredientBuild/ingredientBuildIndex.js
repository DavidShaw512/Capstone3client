import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import Form from './components/ingredientBuildForm';

import './ingredientBuildIndex.css';

export default function IngredientBuild() {
    return (
        <MainLayout>
            <div className="ingredientBuild">
                <h1>Build a Custom Ingredient</h1>
                <div className="buildArea">
                    <Form/>
                </div>
            </div>
        </MainLayout>
    )
}