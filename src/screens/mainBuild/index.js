import React from 'react';

import './index.css'

export default function MainBuild() {
    return (
        <div className="dynamicDisplay">
            <p>Interface, will be dynamically changing svg elements in the shape of a sandwich :)</p>
            <div className="nutritionCounter">Calories</div>
            <div className="nutritionCounter">Protien</div>
            <div className="nutritionCounter">Carbs</div>
            <div className="nutritionCounter">Fats</div>
        </div>
    )
}