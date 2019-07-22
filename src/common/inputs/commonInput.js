import React from 'react';
// import commonInput.css file here

const CommonInput = (props) => {
    return (
        <div className="commonInput">
            <label htmlFor={props.name}>{props.label}</label><br/>
            <input className="commonInputField" id={props.name} type={props.type}/>
        </div>
    )
}

export default CommonInput;