import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 2.5rem;

  border-radius: 10px;
  background-color: #6eb5a2;
  color: #fff;

  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${({ customStyle }) => customStyle}
`;
