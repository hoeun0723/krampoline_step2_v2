import styled from "styled-components";

const DummySticker = () => {
  return <Circle></Circle>;
};

export default DummySticker;

const Circle = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  background-color: orange;
  border-radius: 50%;
`;
