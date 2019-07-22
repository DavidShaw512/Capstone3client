import React from 'react';

import CommonInput from '../../../common/inputs/commonInput'

const LoginForm = () => {
    return (
        <section>
            <form id="loginForm">
                {/* <label htmlFor="email">Email</label><br/> */}
                <CommonInput label="Email" name="email" type="email"/><br/>
                {/* <label htmlFor="password">Password</label><br/> */}
                <CommonInput label="Password" name="password" type="password"/><br/>
                <button>Login</button>
            </form>
        </section>
    )
}

export default LoginForm;