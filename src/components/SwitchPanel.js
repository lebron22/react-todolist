import React, { useContext } from "react";
import { ButtonPrimary } from "./Button/Button";
import { TaskContext } from "../contexts/tasksContext";

import styled from "styled-components";

import { filterTasksByCompletion } from "../actions";

const SwitchPanel = () => {
  const { dispatch, activeFilter, setActiveFilter } = useContext(TaskContext);

  const buttons = [
    { title: "all" },
    { title: "active" },
    { title: "completed" }
  ];

  const renderButtons = buttons.map(({ title }, index) => (
    <ButtonPrimary
      key={index}
      primary={activeFilter === title}
      onClick={() => {
        setActiveFilter(title);
        dispatch(filterTasksByCompletion(title));
      }}
    >
      {title}
    </ButtonPrimary>
  ));

  return <StyledSwitchesContainer>{renderButtons}</StyledSwitchesContainer>;
};

const StyledSwitchesContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export default SwitchPanel;
