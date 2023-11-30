import styled from "styled-components";
import * as S from "./Input.style";

const TextArea = ({ value, placeholder, onChange, disabled }) => {
  return (
    <Container
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default TextArea;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
