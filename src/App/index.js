import React, { useState } from 'react';
import styled from 'styled-components';
import getTodos from '../helpers/data/todosData';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import globals from '../styles/Globals';

const AppStyle = styled.div`
  padding: 20px;
  background-color: ${globals.bgColor};
  color: ${globals.fontColor};
  text-align: center;

  .list-container {
    margin: 50px 0px;
  }
`;

function App() {
  const [todos, setTodos] = useState(getTodos);
  const [doneTodos, setDoneTodos] = useState([]);

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
    <AppStyle>
      <h1>
        Welcome to Todo!
        {/* <i className="fas fa-list" /> */}
      </h1>
      <TodoForm
        setTodos={setTodos}
        todos={todos}
      />
      {
        todos.length ? (
          <div className="list-container">
            <h3>To Do List:</h3>
            {todoListComp(todos)}
          </div>
        ) : ''
      }
      {
        doneTodos.length ? (
          <div className="list-container">
            <h3>Done Todos</h3>
            {todoListComp(doneTodos)}
          </div>
        ) : ''
      }
    </AppStyle>
  );
}

export default App;
