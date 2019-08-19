import { combineReducers } from 'redux';
import build from './build';
import header from './header';
import profile from './profile';
// import ingredientSidebar from './ingredientSidebar';
import buildInterface from './buildInterface';

// Import the rest of the reducers here and put them into combineReducers, 
// and they will be automatically available outside of this file 





export default combineReducers({
    build,
    header,
    profile,
    // ingredientSidebar,
    buildInterface
})