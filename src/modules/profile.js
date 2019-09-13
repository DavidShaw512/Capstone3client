// constants

export const SHOW_SANDWICHES = "SHOW_SANDWICHES";
export const SHOW_INGREDIENTS = "SHOW_INGREDIENTS";
export const CHANGE_CATEGORY = "CHANGE_CATEGORY";



// default state

const defaultState = {
    showSandwiches: true,
    category: "cheese",
}



// reducer

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case SHOW_SANDWICHES:
            return {
                ...state,
                showSandwiches: true
            }
        case SHOW_INGREDIENTS:
            return {
                ...state,
                showSandwiches: false
            }
        case CHANGE_CATEGORY:
            console.log(action.category);
            return {
                ...state,
                category: action.category
            }
        default:
            return state
    }

}



// actions

export const showSandwiches = () => {
    return {
        type: SHOW_SANDWICHES
    }
}

export const showIngredients = () => {
    return {
        type: SHOW_INGREDIENTS
    }
}

export const changeCategory = (category) => {
    return {
        type: CHANGE_CATEGORY,
        category
    }
}