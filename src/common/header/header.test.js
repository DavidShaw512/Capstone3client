import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { shallow, mount } from 'enzyme';
import Provider from 'react-redux';

import { Header } from './header';


it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router><Header/></Router>, div);
    ReactDOM.unmountComponentAtNode(div);
})

// it('renders without crashing', () => {
//     shallow(<Header />);
//   });