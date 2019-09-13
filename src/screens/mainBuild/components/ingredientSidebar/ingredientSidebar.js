// Should this component be stateful? Or merged into the buildInterface component?

import React from 'react';

import './ingredientSidebar.css';

const IngredientSidebar = (props) => {
    let items = props.items.map(item => {
        return (item.category === props.category.toLowerCase() ?
            <li className="sidebarItem"
                key={item.id}>
                <strong>{item.name}</strong><br/>
                <div className="itemDetail">
                    Cal:<br/>
                    {item.calories}
                </div>
                <div className="itemDetail">
                    Pro:<br/>
                    {item.protien}
                </div>
                <div className="itemDetail">
                    Carb:<br/>
                    {item.carbs}
                </div>
                <div className="itemDetail">
                    Fat:<br/>
                    {item.fats}
                </div>
            </li>
            : null
        )
    })
    
    if (props.open === false) {
        return null
    }
    else {
        return (
            <div className={props.className}>
                <h2 className="sidebarHeader">{props.category}</h2>
                <ul className="optionsList">
                    {items}
                </ul>
            </div>
        )
    }
    
};

export default IngredientSidebar;