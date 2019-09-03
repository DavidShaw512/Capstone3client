import React from 'react';
import { connect } from 'react-redux';

import ItemCard from '../../../common/cards/itemCard';
import data from '../../../dummyData.json';
import { SHOW_SANDWICHES, SHOW_INGREDIENTS } from '../../../modules/community';

const sandwiches = data.sandwiches;
const ingredients = data.ingredients.sauces;

export class CommunityInterface extends React.Component {

    sandwichCards = sandwiches.map(sandwich => {
        return (
            <ItemCard name={sandwich.name} key={sandwich.id} details="details"/>
        )
    });

    ingredientCards = ingredients.map(ingredient => {
        return (
            <ItemCard name={ingredient.name} key={ingredient.id} details="details"/>
        )
    })

    render() {
        return (
            <section>
                <div className="sandwichesTab" onClick={this.props.onClickSandwiches}>Sandwiches</div>
                <div className="ingredientsTab" onClick={this.props.onClickIngredients}>Ingredients</div>
                <div className={this.props.showSandwiches ? "cardTableSandwiches" : "cardTableIngredients"}>
                    {this.props.showSandwiches ? this.sandwichCards : this.ingredientCards}
                    {/* <ItemCard name="Item 1" details="details"/>
                    <ItemCard name="Item 2" details="details"/>
                    <ItemCard name="Item 3" details="details"/>
                    <ItemCard name="Item 4" details="details"/> */}
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showSandwiches: state.community.showSandwiches
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickSandwiches: () => dispatch({type: SHOW_SANDWICHES}),
        onClickIngredients: () => dispatch({type: SHOW_INGREDIENTS}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommunityInterface)