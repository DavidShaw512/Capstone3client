import React from 'react';

import MainLayout from '../../common/layouts/mainLayout';
import CommunityInterface from './components/communityInterface';

import './communityIndex.css';

export default function Community() {
    return (
        <MainLayout>
            <div className="community">
                <h1>Sammie Community</h1>
                <CommunityInterface/>
            </div>
        </MainLayout>
    )
}