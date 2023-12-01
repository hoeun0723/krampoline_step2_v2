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
  margin-top: 3.5rem;
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
  gap: 2rem;
  margin: 1rem 3rem 3rem 3rem;
`;

export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 8rem;
  /* ${({ customStyle }) => customStyle} */
`;

export const ThemeInnerText = styled.p`
  display: flex;
  position: absolute;
  margin-top: -4rem;

  color: #000;

  text-align: center;
  font-family: GangwonEduAll OTF;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Theme = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
