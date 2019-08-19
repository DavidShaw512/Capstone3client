import React from 'react';
import { connect } from 'react-redux';

import ItemCard from '../../../common/cards/itemCard';
import AddNew from '../components/addNew/addNew';
import { SHOW_SANDWICHES, SHOW_INGREDIENTS } from '../../../modules/profile';




export class ProfileInterface extends React.Component {


    render() {
        return (
            <section>
                <div className="sandwichesTab" onClick={this.props.onClickSandwichTab}>My Sandwiches</div>
                <div className="ingredientsTab" onClick={this.props.onClickIngredientsTab}>My Ingredients</div>
                <div className="cardTable">
                    <ItemCard name={this.props.showSandwiches ? "Sandwiches" : "Ingredients"} details="Details"/>
                    <ItemCard name="Item 2" details="Details"/>
                    <ItemCard name="Item 3" details="Details"/>
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