import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Text = styled.p`
  display: flex;
  color: #343434;
  width: 80vw;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 2.5rem 2.7rem;
`;

export const ThemeText = styled.p`
  color: #343434;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 3rem 3rem 0 3rem;
`;

export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 3rem 3rem 3rem;
`;

export const Theme = styled.button`
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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OneLine = styled.div`
  display: flex;
  gap: 1rem;
`;
