import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80vw;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid #6eb5a2;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  :focus {
    outline: none;
  }

  ${({ customStyle }) => customStyle}
`;
