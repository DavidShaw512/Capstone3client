import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Community } from './communityIndex';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Community/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
});