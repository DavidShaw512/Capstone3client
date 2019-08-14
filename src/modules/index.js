import { combineReducers } from 'redux';
import build from './build';
import header from './header';
// import ingredientSidebar from './ingredientSidebar';
// import mainBuild from './mainBuild';

// Import the rest of the reducers here and put them into combineReducers, 
// and they will be automatically available outside of this file 





export default combineReducers({
    build,
    header,
    // ingredientSidebar,
    // mainBuild
})