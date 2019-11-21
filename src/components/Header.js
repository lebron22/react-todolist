import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

import { TaskContext } from "../contexts/tasksContext";
import { addTask, searchTasks, filterTasksByCompletion } from "../actions";

import { ButtonPrimary } from "../components/Button/Button";
const { lightGray } = colors;

const Header = () => {
  const [activeButton, setActiveButton] = useState("search");
  const [inputValue, setInputValue] = useState("");

  const { dispatch, setActiveFilter } = useContext(TaskContext);

  useEffect(() => {
    if (activeButton === "search") {
      dispatch(searchTasks(inputValue));
    } else return;
  }, [inputValue]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (activeButton === "add") {
      if (inputValue === "") {
        alert("Podaj nazwę zadania");
      } else {
        dispatch(addTask(inputValue));
        dispatch(filterTasksByCompletion("all"));
        setActiveFilter("all");
        setInputValue("");
      }
    } else if (activeButton === "search") {
      dispatch(searchTasks(inputValue));
    } else return;
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
    activeButton === "search" && dispatch(searchTasks(inputValue));
  };

  return (
    <HeaderForm onSubmit={e => handleFormSubmit(e)}>
      <ButtonPrimary
        primary={activeButton === "add"}
        round
        onClick={() => setActiveButton("add")}
      >
        <i className="fas fa-plus" />
      </ButtonPrimary>
      <input
        type="text"
        placeholder="Nazwa zadania..."
        value={inputValue}
        onChange={e => handleInputChange(e)}
      />
      <ButtonPrimary
        primary={activeButton === "search"}
        round
        onClick={() => {
          setActiveButton("search");
          setInputValue("");
        }}
      >
        <i className="fas fa-search" />
      </ButtonPrimary>
    </HeaderForm>
  );
};

export default Header;

const HeaderForm = styled.form`
  width: 90%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  input {
    width: 60%;
    background-color: ${lightGray};
    border: none;
    padding: 10px;
    font-size: 18px;
    word-wrap: break-word;
  }
`;
