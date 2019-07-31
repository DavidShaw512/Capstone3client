import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import ItemCard from '../../common/cards/itemCard';

import './communityIndex.css';

export default function Community() {
    return (
        <MainLayout>
            <div className="community">
                <h1>Sammie Community</h1>
                <div className="sandwichesTab">Public Sandwiches</div>
                <div className="ingredientsTab">Public Ingredients</div>
                <div className="cardTable">
                    <ItemCard name="Item 1" details="Details"/>
                    <ItemCard name="Item 2" details="Details"/>
                    <ItemCard name="Item 3" details="Details"/>
                    {/* <AddNew category="Sandwich"/> */}
                </div>
            </div>
        </MainLayout>
    )
}

// Make a components folder, get components split out