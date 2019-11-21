import styled from "styled-components";

import React from "react";

const Heading = () => {
  return <StyledH1>Lista zadań do wykonania</StyledH1>;
};

export default Heading;

const StyledH1 = styled.h1`
  font-size: 1.2rem;
  margin: 20px 0;
  text-align: center;
`;
