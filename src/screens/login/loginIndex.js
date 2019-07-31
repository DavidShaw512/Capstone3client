import React from 'react';
import { Link } from 'react-router-dom';

import MainLayout from '../../common/layouts/mainLayout';
import LoginForm from './components/loginForm'

import './loginIndex.css'

export default function Signup() {
    return (
        <MainLayout>
            <div className="">
                <h1>Login</h1>
                <LoginForm />
                <p>New to us? <Link to="/signup">Sign up here</Link></p>
            </div>
        </MainLayout>
    )
}