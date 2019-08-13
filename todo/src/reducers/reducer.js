
  export const initialState = {
    todos: [
      {
        task: "To Do List",
        completed: false,
        id: 386457474574
      }
    ],
    task: ""
  };

    export function todoReducer(state, action) {
  
    switch (action.type) {
      case "TOGGLE_COMPLETED":
        return {
          
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };
      case "ADD_TODO":
        return {
          
          ...state,
          todos: state.todos.concat({
            task: action.payload,
            completed: false,
            id: Date.now()
          }),
          task: ""
        };
      case "CLEAR":
        return {
         
          ...state,
          todos: state.todos.filter(({ completed }) => !completed)
        };
      case "UPDATE":
        return {
          
          ...state,
          task: action.payload
        };
      default:
        return state;
    }
  }  
