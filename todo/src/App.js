import React, { useReducer } from "react";
import "./App.css";

 import { initialState, todoReducer } from "./reducers/reducer";
import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import AddItem from "./components/ToDo";



  	function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const toggleCompleted = id =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  const addTodo = task => dispatch({ type: "ADD_TODO", payload: task });
  const clear = () => dispatch({ type: "CLEAR" });
  const handleChange = event =>
    dispatch({ type: "UPDATE", payload: event.target.value });
         return(
             <div>
                 <h1>Add Tasks To Do:</h1>
             <div>
             <Form
             AddItem={AddItem}
             clear = {clear}
             handleChange={handleChange}
             task={state.task}
             />
             <ToDoList
             todosList={state.todos}
             toggleCompleted={toggleCompleted}
             />
             </div>
             </div>
         );
 }
 export default App;