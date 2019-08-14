import React from 'react';

const IngredientSidebar = (props) => {
    return (
        <div className={props.className}>
            <h2>{props.category}</h2>
            <hr/>
            <ul className="optionsList">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
    
            </ul>
        </div>
    )
};

export default IngredientSidebar;