import React from 'react';

import Header from './common/components/header'

import MainBuild from './screens/mainBuild/index';
import Login from './screens/login/index';
import Signup from './screens/signup/index';
import UserProfile from './screens/userProfile/index';
import Community from './screens/community/index';
import IngredientBuild from './screens/ingredientBuild/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Community />
      </div>

    </div>
  );
}

export default App;
