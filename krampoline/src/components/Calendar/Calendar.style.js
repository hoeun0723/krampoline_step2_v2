import styled from "styled-components";

export const DateInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;

  ::before {
    content: attr(data-placeholder);
    width: 100%;
  }

  :focus::before,
  :valid::before {
    display: none;
  }
`;
