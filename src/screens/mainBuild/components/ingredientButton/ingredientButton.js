import React from 'react';


const IngredientButton = (props) => {
    return (
        <button className={props.className} onClick={props.customClickEvent}><strong>{props.name}</strong></button>
    )
};

export default IngredientButton;