import React from 'react'
const Todo= ({ id, task, completed, toggleCompleted }) => {
    return (
      <div>
        <div
          className={"task" + (completed ? " completed" : "")}
          onClick={() => (id)}
        >
          {task}
        </div>
      </div>
    );
  };

    export default Todo;
