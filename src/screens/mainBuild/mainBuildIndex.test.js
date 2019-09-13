import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import MainBuild from './mainBuildIndex';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MainBuild />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

it('renders without crashing', () => {
  shallow(<MainBuild />);
});
