import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/todoReducer'


const TodoForm = () => {
    const [newTodo, setNewTodo] = useState('')
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = e => {
        setNewTodo(e.target.value)
    };

    return (
        <div>
            <input
                type='text'
                name='newTodo'
                placeholder='Type your task'
                value={newTodo}
                onChange={onChange}
            />
            <button onClick={() => {
                dispatch({ type: 'ADD_TODO', payload: newTodo })
            }}
            >Add Todo</button>
            <button
                onClick={() => {
                    dispatch({ type: 'CLEAR_COMPLETE' })
                }} >Clear Completed</button>
            <div>
                <h3>Todo list:</h3>
                {state.map(todo => (
                    <p onClick={() => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })} key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>{todo.item}</p>
                ))}
            </div>
        </div>
    )
}
export default TodoForm;


