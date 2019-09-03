// constants

export const SHOW_SANDWICHES = "SHOW_SANDWICHES";
export const SHOW_INGREDIENTS = "SHOW_INGREDIENTS";


// default state

export const defaultState = {
    showSandwiches: true,
    sandwiches: [],
    ingredients: []
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
