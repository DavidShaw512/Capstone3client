import React from 'react';
import ReactDOM from 'react-dom';
import NutritionCounter from './nutritionCounter';

it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<NutritionCounter/>, div);
    ReactDOM.unmountComponentAtNode(div);
});