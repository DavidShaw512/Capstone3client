import React from 'react';
import { connect } from 'react-redux'

import MainLayout from '../../common/layouts/mainLayout';
import BuildInterface from './components/buildInterface';

import './mainBuildIndex.css'

class MainBuild extends React.Component {
    // The state of this component will hold things like sidebar category, contents,
    // open/closed, className (which could include an 'open'/'closed' class)
    // ---| Might be better to rearrange this so Build Interface is the stateful one,
    // ---| and this is just stateless and presentational.

    render() {
        return (
            <MainLayout>
                <div className="mainBuild">
                    {/* This will go into the BuildInterface component so all the maps to props 
                    can be in the same place - this component will become stateless */}
                    {/* <IngredientSidebar className="sidebar breadbar" category="Bread" open={false}/> */}
                    <h2>Build Your Sandwich</h2>
                    <BuildInterface/>
                </div>
            </MainLayout>
        )
    }
};

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBuild)