import { useEffect, useState } from "react";
import classes from './style.module.css';
import TodoItem from './Component/Todo-Item/index';
import TodoDetails from './Component/Todo-Details/index';
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [todoList, setTodoList] = useState([]);

  async function fetchListOfTodo() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      if (result?.todos && result.todos.length > 0) {
        setTodoList(result.todos);
      } else {
        setTodoList([]);
        setErrorMsg('No todos found.');
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("An error occurred: " + error.message);

    } finally {
      setLoading(false);
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrentTodoId) {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${getCurrentTodoId}`);
      const details = await apiResponse.json();

      if (details) {
        setTodoDetails(details);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfTodo();
  }, []);

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.title}>Simple ToDo app using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {loading && <Skeleton variant="rectangular" width={650} height={650}>Loading</Skeleton>}
        {errorMsg && <p>{errorMsg}</p>}
        {todoList && todoList.length > 0
          ?
          todoList.map(todoItem => (
            <TodoItem
              key={todoItem.id} // Add a key prop here
              fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo}
              todo={todoItem}
            />
          ))
          :
          <p>No todos available.</p>}
      </div>
      <TodoDetails
        openDialog={openDialog}
        todoDetails={todoDetails}
        onClose={() => setOpenDialog(false)} // Add a handler to close the dialog
      />
    </div>
  );
}

export default App;
