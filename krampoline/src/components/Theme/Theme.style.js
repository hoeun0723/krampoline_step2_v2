import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 8rem;
  height: 8rem;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  background-color: #fff;

  &:active {
    border: 3px solid #70a597;
  }
`;
