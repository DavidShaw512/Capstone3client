import React from 'react';
import ReactDOM from 'react-dom';
import IngredientButton from './ingredientButton';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<IngredientButton/>, div);
    ReactDOM.unmountComponentAtNode(div);
});