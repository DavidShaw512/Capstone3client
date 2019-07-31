// Constants

const HELLO = "HELLO"

// Default State

const defaultState = {
    hello: ""
}




// Reducer

export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case HELLO:
            return state = {
                ...state,
                hello: action.name
            }
        default:
            return state;
    }
}

// Actions

export function sayHello(name) {
    return {
        type: HELLO,
        name
    }
}

// Thunks

