import React from 'react';

import './index.css'

export default function MainBuild() {
    return (
        <div className="mainBuild">
            <h2>Build Your Sandwich</h2>
            <p className="ingredientButton breadTop"><strong>Bread</strong></p>
            <p className="ingredientButton sauce"><strong>Sauce</strong></p>
            <p className="ingredientButton veggies"><strong>Veggies</strong></p>
            <p className="ingredientButton cheese"><strong>Cheese</strong></p>
            <p className="ingredientButton meat"><strong>Meat</strong></p>
            <p className="ingredientButton breadBottom"><strong>Bread</strong></p>
            <div className="nutritionCounter">
                <p>Calories<br/>
                <strong>200</strong></p>
            </div>
            <div className="nutritionCounter">
                <p>Protien<br/>
                <strong>20g</strong></p>
            </div>
            <div className="nutritionCounter">
                <p>Carbs<br/>
                <strong>20g</strong></p>
            </div>
            <div className="nutritionCounter">
                <p>Total Fats<br/>
                <strong>20g</strong></p>
            </div>
            <button className="sandwichSaveButton">SAVE</button>
        </div>
    )
}