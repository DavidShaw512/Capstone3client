import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <Router>
      <div className="App">
        <Header />
        <main className="mainContent">
          <Route exact path='/' component={MainBuild} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/userProfile' component={UserProfile} />
          <Route exact path='/community' component={Community} />
          <Route exact path='/ingredientBuild' component={IngredientBuild} />
        </main>
      </div>
    </Router>
  );
}

export default App;
