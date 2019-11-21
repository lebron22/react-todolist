import React, { useContext } from "react";
import { TaskContext } from "../contexts/tasksContext";
import SingleTask from "./SingleTask";
import styled from "styled-components";
import { colors } from "../utils/colors";
const { darkWhite } = colors;

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  const tasksToShow = tasks
    .filter(task => !task.hiddenByFilterButtons && !task.hiddenInSearch)
    .map(task => <SingleTask task={task} key={task.id} />);

  const renderTasks = tasks.length ? (
    <ul>{tasksToShow.length ? tasksToShow : <li>No tasks to show.</li>}</ul>
  ) : (
    <div>No tasks to do. Hello free time.</div>
  );

  return <TaskContainer>{renderTasks}</TaskContainer>;
};

export default TaskList;

const TaskContainer = styled.div`
  background-color: ${darkWhite};
  width: 100%;

  ul {
    list-style: none;
  }

  .empty {
    margin: 0 10px;
  }
`;
