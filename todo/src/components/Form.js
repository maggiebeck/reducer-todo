import React, {useState} from 'react';

 const Form = ({ addTodo, clear }) => {
   const [task, setTask] = useState('');
    const handleSubmit = event => {
      event.preventDefault();
      addTodo(task);
    };
    const handleClear = event => {
      event.preventDefault();
      clear();
    };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Task"
            onChange={event => setTask(event.target.value)}
            value={task}
          />
          <button type="submit">Add</button>
          <button onClick={handleClear}>Clear</button>
        </form>
      </div>
    );
  };
export default Form; 