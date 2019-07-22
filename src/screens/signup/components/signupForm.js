import React from 'react'

import CommonInput from '../../../common/inputs/commonInput';


const SignupForm = () => {
    return(
        <form className="signupForm" id="jsSignupForm">
            {/* <label htmlFor="email">Email</label><br/> */}
            <CommonInput label="Email" name="email" type="text"/><br/>
            {/* <label htmlFor="password">Password</label><br/> */}
            <CommonInput label="Password" name="password" type="password"/><br/>
            {/* <label htmlFor="confirmPassword">Confirm Password</label><br/> */}
            <CommonInput label="Confirm Password" name="confirmPassword" type="password"/><br/>
            <button>Submit</button>
        </form>
    )
}

export default SignupForm;