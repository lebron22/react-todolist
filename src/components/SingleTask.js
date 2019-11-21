import React, { useContext, useState } from "react";
import { TaskContext } from "../contexts/tasksContext";
import { removeTask, handleTaskComplete } from "../actions";
import styled from "styled-components";
import {
  ButtonTaskCompleted,
  ButtonTaskEdit,
  ButtonTaskRemove
} from "./Button/Button";

const SingleTask = ({ task }) => {
  const { dispatch } = useContext(TaskContext);

  const [inputValue, editInputValue] = useState(task.content);
  const [isFocused, handleFocus] = useState(false);

  const renderTaskContent = isFocused ? (
    <input
      autoFocus
      value={inputValue}
      onChange={e => editInputValue(e.target.value)}
    />
  ) : (
    <p>{inputValue}</p>
  );

  return (
    <SingleTaskLi completed={task.completed}>
      <ButtonTaskCompleted
        completed={task.completed}
        onClick={() => dispatch(handleTaskComplete(task.id))}
      >
        <i className="fas fa-check" />
      </ButtonTaskCompleted>
      {renderTaskContent}
      <ButtonTaskEdit
        isFocused={isFocused}
        onClick={() => inputValue !== "" && handleFocus(!isFocused)}
      >
        <i className="fas fa-edit" />
      </ButtonTaskEdit>
      <ButtonTaskRemove onClick={() => dispatch(removeTask(task.id))}>
        <i className="far fa-trash-alt" />
      </ButtonTaskRemove>
    </SingleTaskLi>
  );
};

export default SingleTask;

const SingleTaskLi = styled.li`
  display: flex;
  justify-content: space-around;
  max-width: 95vw;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  background-color: ${props =>
    props.completed ? "rgba(237, 237, 237, 0.3)" : "#fefefe"};

  input {
    width: 60%;
    font-size: 18px;
    border: none;
    text-decoration: ${props => (props.completed ? "line-through" : "none")};
    background-color: ${props =>
      props.completed ? "rgba(237, 237, 237, 0.3)" : "#fefefe"};
    color: ${props => (props.completed ? "#ccc" : "#000")};
  }

  p {
    width: 60%;
    align-self: center;
    text-decoration: ${props => (props.completed ? "line-through" : "none")};
    word-wrap: break-word;
  }
`;
