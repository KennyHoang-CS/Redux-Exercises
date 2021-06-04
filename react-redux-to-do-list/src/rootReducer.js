
const INITIAL_STATE = {
    todos: []
}

function rootReducer(state = INITIAL_STATE, action) {
    switch(action.type) {

        case 'ADD_TASK': 
            return {
                ...state, 
                todos: [
                    ...state.todos, action.todo
                ]
            };
        
        case 'DELETE_TASK':
            return {
                ...state, 
                todos: state.todos.filter(t => t.id !== action.id)
            };
        
        default: 
            return state; 
    }
}

export default rootReducer;