import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TodoFormComp = styled.div`
  margin: 20px auto;
  padding: 5px;
  width: 50%;

  input {
    width: 100%;
    border-radius: 10px;
    padding: 10px;
  }
`;

export default function TodoForm({
  setTodos, todos
}) {
  const [todo, setTodo] = useState({
    name: '',
    done: false,
    id: uuidv4()
  });

  const handleInputChange = (e) => {
    setTodo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([todo, ...todos]);
    setTodo({
      name: '',
      done: false,
      id: uuidv4()
    });
  };

  return (
    <TodoFormComp className='todo-list'>
      <form
        className='add-to-do'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
      <input
        name='name'
        type='text'
        placeholder='Enter Task'
        value={todo.name}
        onChange={handleInputChange}
      />
      <br/>
      </form>
    </TodoFormComp>
  );
}

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};
