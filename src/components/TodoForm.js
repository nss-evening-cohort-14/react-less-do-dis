import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const TodoFormComp = styled.div`
  margin: 20px auto;
  padding: 5px;
  width: 50%;

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  input {
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    box-shadow: inset 0px 0px 0px 0px;
    text-transform: uppercase;
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
        placeholder='Add a TODO'
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
