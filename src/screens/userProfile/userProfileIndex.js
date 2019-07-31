import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import ItemCard from '../../common/cards/itemCard';
import AddNew from './components/addNew/addNew'

import './userProfileIndex.css'

// const Card = (props) => {
//     return (
//         <div className="card">
//             <h3>{props.name}</h3>
//             <p>{props.details}</p>
//         </div>
//     )
// }

// const AddNew = (props) => {
//     return (
//         <div className="addNew">
//             <h1>+ New {props.category}</h1>
//         </div>
//     )
// }

export default function UserProfile() {
    return (
        <MainLayout>
            <div className="profile">
                <h1>My Profile</h1>
                <div className="sandwichesTab">My Sandwiches</div>
                <div className="ingredientsTab">My Ingredients</div>
                <div className="cardTable">
                    <ItemCard name="Item 1" details="Details"/>
                    <ItemCard name="Item 2" details="Details"/>
                    <ItemCard name="Item 3" details="Details"/>
                    <AddNew category="Sandwich"/>
                </div>
            </div>
        </MainLayout>
    )
}