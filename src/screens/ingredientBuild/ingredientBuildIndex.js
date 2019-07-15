import React from 'react';

import './index.css'

export default function IngredientBuild() {
    return (
        <div className="ingredientBuild">
            <h1>Build a Custom Ingredient</h1>
            <div className="buildArea">
                <form id="jsBuildForm" className="buildForm">
                    <label htmlFor="ingredientName">Name</label>
                    <input type="text" id="ingredientName"></input><br/>
                    <label htmlFor="category">Category</label>
                    <input type="dropdown" id="category"></input><br/>
                    <label htmlFor="servingSize">Serving Size</label>
                    <input type="text" id="servingSize"></input><br/>
                    <label htmlFor="calories">Calories</label>
                    <input type="number" id="calories"></input><br/>
                    <label htmlFor="protien">Protien</label>
                    <input type="number" id="protien"></input><br/>
                    <label htmlFor="carbs">Carbs</label>
                    <input type="number" id="carbs"></input><br/>
                    <label htmlFor="fats">Total Fats</label>
                    <input type="number" id="fats"></input>
                </form>
            </div>
        </div>
    )
}