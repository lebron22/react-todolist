import uuid from "uuid/v1";

import {
  HANDLE_TASK_COMPLETE,
  ADD_TASK,
  REMOVE_TASK,
  SEARCH_TASKS,
  FILTER_TASKS_BY_COMPLETION,
  REMOVE_COMPLETED_TASK
} from "../actions/types";

export const tasksReducer = (state, action) => {
  switch (action.type) {
    case HANDLE_TASK_COMPLETE:
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );

    case ADD_TASK:
      const restTasks = state.map(task => ({ ...task, hiddenInSearch: false }));
      return [
        ...restTasks,
        {
          content: action.payload.content,
          completed: false,
          hiddenByFilterButtons: false,
          id: uuid()
        }
      ];

    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);

    case SEARCH_TASKS:
      return state.map(task => {
        const content = task.content.toUpperCase();
        const text = action.payload.inputValue.toUpperCase();

        return content.includes(text)
          ? { ...task, hiddenInSearch: false }
          : { ...task, hiddenInSearch: true };
      });

    case FILTER_TASKS_BY_COMPLETION:
      const filteredTasks = activeButton => {
        switch (activeButton) {
          case "all":
            return state.map(task => ({
              ...task,
              hiddenByFilterButtons: false
            }));
          case "active":
            return state.map(task =>
              !task.completed
                ? { ...task, hiddenByFilterButtons: false }
                : { ...task, hiddenByFilterButtons: true }
            );
          case "completed":
            return state.map(task =>
              task.completed
                ? { ...task, hiddenByFilterButtons: false }
                : { ...task, hiddenByFilterButtons: true }
            );
          default:
            return state;
        }
      };
      return filteredTasks(action.payload.activeButton);

    case REMOVE_COMPLETED_TASK:
      return state.filter(task => !task.completed);

    default:
      break;
  }
};
