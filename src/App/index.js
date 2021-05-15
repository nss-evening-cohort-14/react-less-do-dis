import React, { useState } from 'react';
import getTodos from '../helpers/data/todosData';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import './App.scss';

function App() {
  const [todos, setTodos] = useState(getTodos);
  const [doneTodos, setDoneTodos] = useState([]);

  // useEffect(() => {
  //   setTodos(getTodos());
  // }, []);

  const handleRemoveTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const completeTodo = ({
    name, done, id
  }) => {
    handleRemoveTodo(id);

    const compTodo = {
      name,
      id,
      done: !done
    };

    setDoneTodos((prevState) => ([
      ...prevState,
      compTodo
    ]));
  };

  const todoListComp = (array) => (
    array.map((todo) => (
      <TodoList
        id={todo.id}
        name={todo.name}
        done={todo.done}
        key={todo.id} // if we have more than one, we have to have a key
        handleRemoveTodo={handleRemoveTodo} // passing function to remove item
        completeTodo={completeTodo}
      />
    )));

  return (
    <div className='App'>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
      />
      {
        todos.length ? (
          <>
        <h1>To Do List:</h1>
        {todoListComp(todos)}
        </>
        ) : ''
      }
      {
        doneTodos.length ? (
          <>
            <h1>Done Todos</h1>
            {todoListComp(doneTodos)}
          </>
        ) : ''
      }
    </div>
  );
}

export default App;
