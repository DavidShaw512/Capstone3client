import React from 'react';


import MainBuild from './screens/mainBuild/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Sandwich Nutrition Thing
        </h1>
      </header>
      <div className="mainContent">
        <MainBuild />
      </div>

    </div>
  );
}

export default App;
