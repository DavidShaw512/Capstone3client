import React from 'react';
import { connect } from 'react-redux';

import ItemCard from '../../../common/cards/itemCard';
import AddNew from '../components/addNew/addNew';
import { SHOW_SANDWICHES, SHOW_INGREDIENTS, CHANGE_CATEGORY } from '../../../modules/profile';
import data from '../../../dummyData.json';



export class ProfileInterface extends React.Component {

    sandwichCards = data.sandwiches.map(sandwich => {
        if (sandwich.userID === "u1") {
            return (
                <ItemCard 
                    name={sandwich.name} 
                    key={sandwich.id} 
                    details="details"
                />
            )
        }
        else {return null;}
    });

    ingredientCards = data.ingredients.map(ingredient => {
        return (ingredient.category === this.props.category 
                ? 
                <ItemCard 
                    name={ingredient.name} 
                    key={ingredient.id} 
                    details="details"
                />
                :
                null)
    });

    categoryButtons = () => {
        return (
            <div className="categoryButtons">
                <button className="categoryButton" onClick={this.props.onClickBreadButton}>Bread</button>
                <button className="categoryButton" onClick={this.props.onClickSauceButton}>Sauce</button>
                <button className="categoryButton" onClick={this.props.onClickVeggiesButton}>Veggies</button>
                <button className="categoryButton" onClick={this.props.onClickCheeseButton}>Cheese</button>
                <button className="categoryButton" onClick={this.props.onClickMeatButton}>Meat</button>
            </div>
        )
    }

    render() {
        return (
            <section>
                <div className="sandwichesTab" onClick={this.props.onClickSandwichTab}>My Sandwiches</div>
                <div className="ingredientsTab" onClick={this.props.onClickIngredientsTab}>My Ingredients</div>
                <div className={this.props.showSandwiches ? "cardTableSandwiches" : "cardTableIngredients"}>
                    {this.props.showSandwiches ? null : this.categoryButtons()}
                    {this.props.showSandwiches ? this.sandwichCards : this.ingredientCards}
                    <AddNew category="Sandwich"/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSandwiches: state.profile.showSandwiches,
        category: state.profile.category
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSandwichTab: () => dispatch({type: SHOW_SANDWICHES}),
        onClickIngredientsTab: () => dispatch({type: SHOW_INGREDIENTS}),
        onClickBreadButton: () => dispatch({type: CHANGE_CATEGORY, category: "bread"}),
        onClickSauceButton: () => dispatch({type: CHANGE_CATEGORY, category: "sauces"}),
        onClickVeggiesButton: () => dispatch({type: CHANGE_CATEGORY, category: "veggies"}),
        onClickCheeseButton: () => dispatch({type: CHANGE_CATEGORY, category: "cheese"}),
        onClickMeatButton: () => dispatch({type: CHANGE_CATEGORY, category: "meat"}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInterface)