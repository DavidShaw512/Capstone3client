import React from 'react';

import Form from './components/ingredientBuildForm'

import './ingredientBuildIndex.css'

export default function IngredientBuild() {
    return (
        <div className="ingredientBuild">
            <h1>Build a Custom Ingredient</h1>
            <div className="buildArea">
                <Form/>
            </div>
        </div>
    )
}