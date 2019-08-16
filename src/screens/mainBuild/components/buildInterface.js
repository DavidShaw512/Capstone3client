import React from 'react';
import { connect } from 'react-redux'

import IngredientButton from './ingredientButton/ingredientButton';
import IngredientSidebar from './ingredientSidebar/ingredientSidebar';
import NutritionCounter from './nutritionCounter/nutritionCounter';
import { TOGGLE_SIDEBAR } from '../../../modules/buildInterface';
import SaveButton from '../../../common/buttons/saveButton';

// const BuildInterface = () => {
class BuildInterface extends React.Component {
    render() {
        return (
            <section>
                {/* Ingredient sidebar, moved from mainBuild component */}
                <IngredientSidebar className={"sidebar " + this.props.category} category={this.props.category} open={this.props.open}/>

                {/* Sandwich graphic interface */}
                <IngredientButton customClickEvent={this.props.toggleBreadSidebar.bind(this)} className="ingredientButton Bread breadTop" name="Bread"/>
                <IngredientButton customClickEvent={this.props.toggleSaucesSidebar.bind(this)} className="ingredientButton Sauces" name="Sauces"/>
                <IngredientButton customClickEvent={this.props.toggleVeggiesSidebar.bind(this)} className="ingredientButton Veggies" name="Veggies"/>
                <IngredientButton customClickEvent={this.props.toggleCheeseSidebar.bind(this)} className="ingredientButton Cheese" name="Cheese"/>
                <IngredientButton customClickEvent={this.props.toggleMeatSidebar.bind(this)} className="ingredientButton Meat" name="Meat"/>
                <IngredientButton customClickEvent={this.props.toggleBreadSidebar.bind(this)} className="ingredientButton Bread breadBottom" name="Bread"/>

                {/* Nutrition counter array */}
                <NutritionCounter className="nutritionCounter" name="Calories" count="500"/>
                <NutritionCounter className="nutritionCounter" name="Protien" count="20g"/>
                <NutritionCounter className="nutritionCounter" name="Carbs" count="20g"/>
                <NutritionCounter className="nutritionCounter" name="Total Fats" count="15g"/>

                {/* Save button, from common folder */}
                <SaveButton/>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        open: state.buildInterface.openSidebar,
        category: state.buildInterface.category,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleBreadSidebar: () => dispatch({type: TOGGLE_SIDEBAR, category: "Bread"}),
        toggleSaucesSidebar: () => dispatch({type: TOGGLE_SIDEBAR, category: "Sauces"}),
        toggleVeggiesSidebar: () => dispatch({type: TOGGLE_SIDEBAR, category: "Veggies"}),
        toggleCheeseSidebar: () => dispatch({type: TOGGLE_SIDEBAR, category: "Cheese"}),
        toggleMeatSidebar: () => dispatch({type: TOGGLE_SIDEBAR, category: "Meat"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildInterface);