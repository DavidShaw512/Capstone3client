// constants

export const SHOW_SANDWICHES = "SHOW_SANDWICHES";
export const SHOW_INGREDIENTS = "SHOW_INGREDIENTS";



// default state

const defaultState = {
    showSandwiches: true,
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