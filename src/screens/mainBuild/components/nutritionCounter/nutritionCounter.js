import React from 'react';


const NutritionCounter = (props) => {
    return (
        <div className={props.className}>
            <p>{props.name}<br/>
            <strong>{props.count}</strong></p>
        </div>
    )
}

export default NutritionCounter;