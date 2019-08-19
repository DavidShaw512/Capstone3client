import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import ProfileInterface from './components/profileInterface';
import ItemCard from '../../common/cards/itemCard';
import AddNew from './components/addNew/addNew'

import './userProfileIndex.css'

export default function UserProfile() {
    return (
        <MainLayout>
            <div className="profile">
                <h1>My Profile</h1>
                <ProfileInterface/>
            </div>
        </MainLayout>
    )
}