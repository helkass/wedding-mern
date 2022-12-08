import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 10px;
  background-color: #b5f4ed;
  color: #10a19d;
  padding: 0.5em 0.9em;
  width: max-content;
  transition: 0.3s;

  &:hover {
    color: #b5f4ed;
    background-color: #10a19d;
  }

  &:focus {
    outline: none;
  }
`;
