
const INITIAL_STATE = {
    mood: ''
}

const moodReducer = (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
        case 'happy':
            return {...state, mood: action.payload}
        case 'sad':
            return {...state, mood: action.payload}
        case 'confused':
            return {...state, mood: action.payload}
        case 'cry':
            return {...state, mood: action.payload}
        default: 
            return state;
    }
}

const store = Redux.createStore(moodReducer);