import styled from "styled-components";
import { colors } from "../../utils/colors";
const {
  lightGray,
  darkGray,
  lightBlack,
  darkWhite,
  mainGreen,
  mainYellow,
  mainRed
} = colors;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
`;

export const ButtonPrimary = styled(Button)`
  min-width: ${props => (props.round ? "40px" : "30%")};
  height: 40px;
  background-color: ${props => (props.primary ? lightBlack : lightGray)};
  border: ${props =>
    props.primary ? `1px solid ${lightBlack}` : `2px solid ${darkGray}`};
  color: ${props => (props.primary ? lightGray : lightBlack)};
  border-radius: ${props => (props.round ? "50%" : "5px")};
  text-transform: capitalize;
  padding: 0 5px;
  transition: 0.2s ease-in-out;
  :hover {
    border: 1px solid ${lightBlack};
  }

  i {
    font-size: 20px;
  }
`;

export const ButtonTask = styled(Button)`
  width: 30px;
  height: 30px;
  border: 1px solid ${lightGray};
  border-radius: 50%;
  background-color: ${darkWhite};
`;
export const ButtonTaskCompleted = styled(ButtonTask)`
  background-color: ${props =>
    props.completed ? `${mainGreen}` : `${darkWhite}`};
  :hover {
    background-color: ${mainGreen};
  }
`;
export const ButtonTaskEdit = styled(ButtonTask)`
  background-color: ${props =>
    props.isFocused ? `${mainYellow}` : `${darkWhite}`};
  :hover {
    background-color: ${mainYellow};
  }
`;

export const ButtonTaskRemove = styled(ButtonTask)`
  :hover {
    background-color: ${mainRed};
  }
`;
