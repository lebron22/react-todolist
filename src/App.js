import React from "react";
import { createGlobalStyle } from "styled-components";
import Heading from "./components/Heading";
import TasksContextProvider from "./contexts/tasksContext";
import AppMain from "./components/AppMain";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import SwitchPanel from "./components/SwitchPanel";
import ElsePanel from "./components/ElsePanel";
import { colors } from "./utils/colors";
const { lightGray } = colors;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Heading />
      <TasksContextProvider>
        <AppMain>
          <Header />
          <TaskList />
          <SwitchPanel />
          <ElsePanel />
        </AppMain>
      </TasksContextProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Roboto, Helvetica, sans-serif;
  width: 100%;
  background-color: ${lightGray};
}
`;

export default App;
