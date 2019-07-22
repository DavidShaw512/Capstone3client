import React from 'react';

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