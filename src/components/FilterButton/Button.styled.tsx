import styled from "styled-components";

interface ButtonProps {
  active: string;
}

export const Button = styled.button<ButtonProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid;
  border-color: ${(props) => (props.active === "true" ? "rgb(182, 114, 255)" : "#ffffff")};
  border-radius: 60px;
  padding: 6px 20px;
  background-color: transparent;
  color: ${(props) => (props.active === "true" ? "rgb(182, 114, 255)" : "#ffffff")};

  &:active {
    border-color: #ad61ff;
    color: #ad61ff;
    cursor: pointer;
  }

  &:hover {
    border-color: #d9b6ff;
    color: #d9b6ff;
    cursor: pointer;
  }
`;
