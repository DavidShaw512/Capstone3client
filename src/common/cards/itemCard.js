import React from 'react';

import './itemCard.css';

const ItemCard = (props) => {
    return (
        <div className="itemCard">
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
    )
};

export default ItemCard;