import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }
`;

export const Wrapper = styled.div`
  padding: 8px;
  width: 800px;
  margin: 0 auto;
`;
