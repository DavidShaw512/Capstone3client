import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import IngredientButton from './ingredientButton/ingredientButton';
import IngredientSidebar from './ingredientSidebar/ingredientSidebar';
import NutritionCounter from './nutritionCounter/nutritionCounter';
import { TOGGLE_SIDEBAR } from '../../../modules/buildInterface';
import SaveButton from '../../../common/buttons/saveButton';
import data from '../../../dummyData.json';

const ingredients = data.ingredients;

class BuildInterface extends React.Component {

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response);
                console.log(data.ingredients);
            });
    }

    render() {
        return (
            <section>
                {/* Ingredient sidebar, moved from mainBuild component */}
                <IngredientSidebar 
                    className={"sidebar " + this.props.category} 
                    category={this.props.category} 
                    open={this.props.open}
                    items={ingredients}
                />

                {/* Colorful sandwich graphic interface */}
                <IngredientButton customClickEvent={this.props.toggleBreadSidebar.bind(this)} className="ingredientButton Bread breadTop" name="Bread: " items={this.props.sandwich.bread}/>
                <IngredientButton customClickEvent={this.props.toggleSaucesSidebar.bind(this)} className="ingredientButton Sauces" name="Sauces: " items={this.props.sandwich.sauces.join(", ")}/>
                <IngredientButton customClickEvent={this.props.toggleVeggiesSidebar.bind(this)} className="ingredientButton Veggies" name="Veggies: " items={this.props.sandwich.veggies.join(", ")}/>
                <IngredientButton customClickEvent={this.props.toggleCheeseSidebar.bind(this)} className="ingredientButton Cheese" name="Cheese: " items={this.props.sandwich.cheese}/>
                <IngredientButton customClickEvent={this.props.toggleMeatSidebar.bind(this)} className="ingredientButton Meat" name="Meat: " items={this.props.sandwich.meat}/>
                <IngredientButton customClickEvent={this.props.toggleBreadSidebar.bind(this)} className="ingredientButton Bread breadBottom" name="Bread: " items={this.props.sandwich.bread}/>

                {/* Nutrition counter array */}
                <NutritionCounter className="nutritionCounter" name="Calories" count={this.props.sandwich.nutrition.calories}/>
                <NutritionCounter className="nutritionCounter" name="Protien" count={this.props.sandwich.nutrition.protien + "g"}/>
                <NutritionCounter className="nutritionCounter" name="Carbs" count={this.props.sandwich.nutrition.carbs + "g"}/>
                <NutritionCounter className="nutritionCounter" name="Total Fats" count={this.props.sandwich.nutrition.fats + "g"}/>

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
        sandwich: state.buildInterface.currentSandwich
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