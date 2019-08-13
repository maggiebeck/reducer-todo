import React from 'react'
import AddItem from './ToDo';
const TodoList = ({ todosList, toggleCompleted }) => {
    return (
      <div>
        {todosList.map(todo => (
          <AddItem key={todo.id} {...todo} toggleCompleted={toggleCompleted} />
        ))}
      </div>
    );
  };

   export default TodoList;