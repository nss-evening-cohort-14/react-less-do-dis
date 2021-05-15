import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  border: 1px solid gray;
  padding: 10px;
  margin: 5px auto;
  border-radius: 10px;
`;

const TodoList = ({
  name, done, handleRemoveTodo, id, completeTodo
}) => (
  <TodoListItem>
    { done ? <i className="fas fa-check"></i> : <i className="fas fa-square" onClick={() => completeTodo({
      name, done, id
    })}></i> }
    <p>{name}</p>
    <i className="far fa-trash-alt" onClick={() => handleRemoveTodo(id)}></i>
  </TodoListItem>
);

TodoList.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool,
  handleRemoveTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default TodoList;
