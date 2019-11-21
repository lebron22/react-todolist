import {
  HANDLE_TASK_COMPLETE,
  ADD_TASK,
  REMOVE_TASK,
  SEARCH_TASKS,
  FILTER_TASKS_BY_COMPLETION,
  REMOVE_COMPLETED_TASK
} from "./types";

export const handleTaskComplete = id => {
  return {
    type: HANDLE_TASK_COMPLETE,
    payload: { id }
  };
};

export const addTask = content => {
  return {
    type: ADD_TASK,
    payload: { content }
  };
};

export const removeTask = id => {
  return {
    type: REMOVE_TASK,
    payload: { id }
  };
};

export const searchTasks = inputValue => {
  return {
    type: SEARCH_TASKS,
    payload: { inputValue }
  };
};

export const filterTasksByCompletion = activeButton => {
  return {
    type: FILTER_TASKS_BY_COMPLETION,
    payload: { activeButton }
  };
};

export const removeCompletedTask = () => {
  return {
    type: REMOVE_COMPLETED_TASK
  };
};
