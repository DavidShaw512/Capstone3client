import React from 'react';
import ReactDOM from 'react-dom';
import IngredientBuild from './ingredientBuildIndex';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<IngredientBuild/>, div);
    ReactDOM.unmountComponentAtNode(div);
});