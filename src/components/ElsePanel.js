import React, { useContext } from "react";
import { TaskContext } from "../contexts/tasksContext";
import { ButtonPrimary } from "./Button/Button";

import { removeCompletedTask } from "../actions";

import styled from "styled-components";

const ElsePanel = () => {
  const { tasks, dispatch } = useContext(TaskContext);

  //get number of completed tasks

  const filterCompletedTasks = () =>
    tasks.filter(task => task.completed).length;

  const renderCompletedTasksLength = filterCompletedTasks();

  return (
    <StyledElsePanel>
      <div>{tasks.length} items left</div>
      <div>
        <ButtonPrimary onClick={() => dispatch(removeCompletedTask())}>
          Clear completed ({renderCompletedTasksLength})
        </ButtonPrimary>
      </div>
    </StyledElsePanel>
  );
};

const StyledElsePanel = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  div {
    width: 50%;
    text-align: center;
  }
`;

export default ElsePanel;
