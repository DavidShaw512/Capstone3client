import React from 'react';

import './index.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
    )
}

const AddNew = (props) => {
    return (
        <div className="addNew">
            <h1>+ New {props.category}</h1>
        </div>
    )
}

export default function Community() {
    return (
        <div className="community">
            <h1>Sammie Community</h1>
            <div className="sandwichesTab">Public Sandwiches</div>
            <div className="ingredientsTab">Public Ingredients</div>
            <div className="cardTable">
                <Card name="Item 1" details="Details"/>
                <Card name="Item 2" details="Details"/>
                <Card name="Item 3" details="Details"/>
                {/* <AddNew category="Sandwich"/> */}
            </div>
        </div>
    )
}