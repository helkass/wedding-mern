import styled from "styled-components";

export const Container = ({ children }) => {
  return <Main>{children}</Main>;
};

const Main = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  height: 100%;

  @media (max-width: 540px) {
    width: 90%;
  }
`;
