import React from 'react';
import TodoForm from './TodoForm'


const Todo = () => {



return (
  <div>
       <header>
         <h2>ToDo List</h2>
        </header>
        <div id='todos'>
        <TodoForm  />
        </div>
  </div>
)
}

export default Todo;
