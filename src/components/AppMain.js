import React from "react";
import styled from "styled-components";

const AppMain = ({ children }) => {
  return <StyledAppMain>{children}</StyledAppMain>;
};

const StyledAppMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  width: 95%;
`;

export default AppMain;
