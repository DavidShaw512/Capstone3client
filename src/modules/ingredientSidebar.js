// constants

export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const SET_CATEGORY = "SET_CATEGORY";

// default state

const defaultState = {
    open: false,
    category: bread,

}

// reducer

const reducer = (state = defaultState, action = {}) => {
    
}

// actions

export const openSidebar = () => {
    return {
        type: OPEN_SIDEBAR
    }
}

export const closeSidebar = () => {
    return {
        type: CLOSE_SIDEBAR
    }
}

export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        category
    }
}

