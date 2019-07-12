import React from 'react';

import './index.css'

export default function Signup() {
    return (
        <div className="">
            <h1>Login</h1>
            <form>
                <label htmlFor="email">Email</label><br/>
                <input id="email" type="text"></input><br/>
                <label htmlFor="password">Password</label><br/>
                <input id="password" type="password"></input><br/>
                <button>Login</button>
            </form>
        </div>
    )
}