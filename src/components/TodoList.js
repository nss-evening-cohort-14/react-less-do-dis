import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globals from '../styles/Globals';

const TodoListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  border: 1px solid gray;
  padding: 10px;
  margin: 5px auto;
  border-radius: 5px;
  background-color: ${globals.todoBg};

  @media only screen and (max-width: 700px) {
    width: 90%;
  }

  .todo-content {
    padding: 10px;
    word-break: break-all;
  }

  .far {
    cursor: pointer;
  }
`;

const TodoList = ({
  name, done, handleRemoveTodo, id, completeTodo
}) => (
  <TodoListItem>
    { done
      ? <i className="fas fa-check" style={{ fontSize: '30px' }}/>
      : <i
          className="far fa-square"
          style={{ fontSize: '30px' }}
          onClick={() => completeTodo({ name, done, id })}
        />
    }
    <div className="todo-content">{name}</div>
    { done
      ? <div></div>
      : <i
          className="far fa-trash-alt"
          onClick={() => handleRemoveTodo(id)}
        />
    }
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
