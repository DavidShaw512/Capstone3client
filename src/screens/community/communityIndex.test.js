import React from 'react';
import ReactDOM from 'react-dom';
import Community from './communityIndex';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Community/>, div);
    ReactDOM.unmountComponentAtNode(div);
});