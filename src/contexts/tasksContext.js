import React, { useState, useReducer, useEffect, createContext } from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { filterTasksByCompletion } from "../actions";
import { startTasks } from "../constants/startTasks";

export const TaskContext = createContext();

const TasksContextProvider = props => {
  const [activeFilter, setActiveFilter] = useState("all");

  const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : startTasks;
  });

  useEffect(() => {
    dispatch(filterTasksByCompletion(activeFilter));
  }, []);

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [
    tasks
  ]);

  return (
    <TaskContext.Provider
      value={{ tasks, activeFilter, setActiveFilter, dispatch }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TasksContextProvider;
