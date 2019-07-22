import React from 'react';

import Header from './common/header/header'

import MainBuild from './screens/mainBuild/mainBuildIndex';
import Login from './screens/login/loginIndex';
import Signup from './screens/signup/signupIndex';
import UserProfile from './screens/userProfile/userProfileIndex';
import Community from './screens/community/communityIndex';
import IngredientBuild from './screens/ingredientBuild/ingredientBuildIndex';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <MainBuild />
      </div>
    </div>
  );
}

export default App;
