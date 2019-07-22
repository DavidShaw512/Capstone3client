import React from 'react';


const IngredientButton = (props) => {
    return (
        <p className={props.className}><strong>{props.name}</strong></p>
    )
};

export default IngredientButton;