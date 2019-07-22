import React from 'react';

import CommonInput from '../../../common/inputs/commonInput';
import SaveButton from '../../../common/buttons/saveButton';

const Form = () => {
    return (
        <form id="jsBuildForm" className="buildForm">
            <CommonInput label="Name" name="name" type="text" />
            <CommonInput label="Category" name="category" type="text" />
            <CommonInput label="Serving Size" name="servingSize" type="text" />
            <CommonInput label="Calories" name="calories" type="number" />
            <CommonInput label="Protien" name="protien" type="number" />
            <CommonInput label="Carbs" name="carbs" type="number" />
            <CommonInput label="Total Fats" name="fats" type="number" />

            <SaveButton/>
        </form>
    )
}

export default Form;