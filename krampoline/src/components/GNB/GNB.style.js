import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
`;

const getButtonColor = (nowPage) => (nowPage ? "black" : "#CECECE");

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem;

  color: ${({ $nowPage }) => getButtonColor($nowPage)};
  &:hover {
    background-color: gray;
  }
`;
