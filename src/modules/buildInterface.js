// constants

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
// export const SET_CATEGORY = "SET_CATEGORY";

// default state

const defaultState = {
    openSidebar: false,
    category: "",

}

// reducer

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                openSidebar: !state.openSidebar,
                category: action.category
            }
        case CLOSE_SIDEBAR:
            return {
                ...state,
                openSidebar: false
            }
        // case SET_CATEGORY:
        //     return {
        //         ...state,
        //         category: action.category
        //     }
        default: return state
    }
}

// actions

export const toggleSidebar = (category) => {
    return {
        type: TOGGLE_SIDEBAR,
        category
    }
}

export const closeSidebar = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}

// export const setCategory = (category) => {
//     return {
//         type: SET_CATEGORY,
//         category
//     }
// }

