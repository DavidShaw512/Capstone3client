import React from 'react';
import { connect } from 'react-redux'

import IngredientButton from './ingredientButton/ingredientButton';
import NutritionCounter from './nutritionCounter/nutritionCounter';
import SaveButton from '../../../common/buttons/saveButton'

// const BuildInterface = () => {
class BuildInterface extends React.Component {


    render() {
        return (
            <section>
                {/* Sandwich graphic interface */}
                <IngredientButton className="ingredientButton breadTop" name="Bread"/>
                <IngredientButton className="ingredientButton sauce" name="Sauce"/>
                <IngredientButton className="ingredientButton veggies" name="Veggies"/>
                <IngredientButton className="ingredientButton cheese" name="Cheese"/>
                <IngredientButton className="ingredientButton meat" name="Meat"/>
                <IngredientButton className="ingredientButton breadBottom" name="Bread"/>

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

const mapStateToProps = props => {
    return {

    }
}

const mapDispatchToProps = props => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildInterface);