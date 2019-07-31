import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MainLayout from './common/layouts/mainLayout';

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
      <Switch>
        <Route exact path='/' component={MainBuild} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/userProfile' component={UserProfile} />
        <Route path='/community' component={Community} />
        <Route path='/ingredientBuild' component={IngredientBuild} />
      </Switch>
    </Router>
    // Dave Larimore's solution to the Route testing problem:
      // <React.Fragment>
      //   <MainLayout exact path='/' component={MainBuild} />
      //   <MainLayout path='/login' component={Login} />
      //   <MainLayout path='/signup' component={Signup} />
      //   <MainLayout path='/userProfile' component={UserProfile} />
      //   <MainLayout path='/community' component={Community} />
      //   <MainLayout path='/ingredientBuild' component={IngredientBuild} />
      // </React.Fragment>
  );
}

export default App;
