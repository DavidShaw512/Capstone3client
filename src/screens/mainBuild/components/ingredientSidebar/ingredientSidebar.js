import React from 'react';

import './ingredientSidebar.css';



const IngredientSidebar = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.category}</h2>
            <hr/>
            <ul className="optionsList">
    
            </ul>
        </div>
    )
};

export default IngredientSidebar;