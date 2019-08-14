import React from 'react';
import { connect } from 'react-redux'

import MainLayout from '../../common/layouts/mainLayout';
import BuildInterface from './components/buildInterface';
import IngredientSidebar from './components/ingredientSidebar/ingredientSidebar';

import './mainBuildIndex.css'

class MainBuild extends React.Component {
    // The state of this component will hold things like sidebar category, contents,
    // open/closed, className (which could include an 'open'/'closed' class)
    // 

    render() {
        return (
            <MainLayout>
                <div className="mainBuild">
                    <IngredientSidebar className="sidebar breadbar" category="Bread" open={false}/>
                    <h2>Build Your Sandwich</h2>
                    <BuildInterface/>
                </div>
            </MainLayout>
        )
    }
};

const mapStateToProps = () => {
    return "placeholder"
}

const mapDispatchToProps = () => {
    return "placeholder"
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBuild)