export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
},
{
    item: 'Test 1',
    completed: false,
    id: 3891977589
},
{
    item: 'Test 2',
    completed: false,
    id: 389197678
}]


export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                item: action.payload,
                completed: false,
                id: Date.now()
            }]
        case 'TOGGLE_COMPLETE':
            let complete = state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo
                }
            })
            return complete

        case 'CLEAR_COMPLETE':
            let clear = state.filter(todo => {
                if (todo.completed === true) {
                    return !todo.completed
                } else {
                    return todo
                }
            })
            return clear
        default:
            return state;
    }
}

