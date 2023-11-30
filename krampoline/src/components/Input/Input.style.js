import styled from "styled-components";

export const Container = styled.input.attrs({ type: "text" })`
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
  z-index: 0;

  &:focus {
    outline: none;
    box-shadow: none;
    border: 5px solid #e1fff7; /* 포커스 시 border 색상 변경 */
  }

  ${({ customStyle }) => customStyle}
`;
