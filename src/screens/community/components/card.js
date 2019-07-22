import React from 'react';

import './card.css'

const Card = (props) => {
    return (
        <div className="card">
            <h3>{props.name}</h3>
            <p>{props.details}</p>
        </div>
    );
};

export default Card;