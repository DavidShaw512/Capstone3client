// Constants

export const MENU_TOGGLE = "MENU_TOGGLE"

// Default State

const defaultState = {
    showMenu: false
}




// Reducer

const reducer = (state = defaultState, action = {}) => {
    // if (action.type === MENU_TOGGLE) {
    //     return {
    //         ...state,
    //         showMenu: !state.showMenu
    //     }
    // }
    // return state;
    switch (action.type) {
        case MENU_TOGGLE:
            return state = {
                ...state,
                showMenu: !state.showMenu
            }
        default:
            return state;
    }
}

// Actions (returned from Action Creator functions)

export function menuToggle() {
    return {
        type: MENU_TOGGLE
    }
}

// Thunks



export default reducer;