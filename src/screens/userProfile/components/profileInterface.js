import React from 'react';
import { connect } from 'react-redux';

import ItemCard from '../../../common/cards/itemCard';
import AddNew from '../components/addNew/addNew';
import { SHOW_SANDWICHES, SHOW_INGREDIENTS } from '../../../modules/profile';
import data from '../../../dummyData.json';


// const sandwiches = data.sandwiches;
// const ingredients = data.ingredients;

export class ProfileInterface extends React.Component {

    // sandwiches = () => {return data.sandwiches};
    // ingredients = () => {return data.ingredients};

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

    ingredientCards = data.ingredients.bread.map(ingredient => {
        return (
            <ItemCard 
                name={ingredient.name} 
                key={ingredient.id} 
                details="details"
            />
        )
    });

    render() {
        // console.log(sandwiches);
        return (
            <section>
                <div className="sandwichesTab" onClick={this.props.onClickSandwichTab}>My Sandwiches</div>
                <div className="ingredientsTab" onClick={this.props.onClickIngredientsTab}>My Ingredients</div>
                <div className={this.props.showSandwiches ? "cardTableSandwiches" : "cardTableIngredients"}>
                    {/* <CardTable items={this.props.showSandwiches ? sandwiches : ingredients}/> */}
                    {this.props.showSandwiches ? this.sandwichCards : this.ingredientCards}
                    {/* <ItemCard name={this.props.showSandwiches ? "Sandwiches" : "Ingredients"} details="Details"/>
                    <ItemCard name="Item 2" details="Details"/>
                    <ItemCard name="Item 3" details="Details"/> */}
                    <AddNew category="Sandwich"/>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSandwiches: state.profile.showSandwiches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSandwichTab: () => dispatch({type: SHOW_SANDWICHES}),
        onClickIngredientsTab: () => dispatch({type: SHOW_INGREDIENTS})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInterface)