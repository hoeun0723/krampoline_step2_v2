import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const InputText = styled.p`
  display: flex;
  padding: 1rem 0;
  text-align: left;
`;

export const PlaceDiv = styled.div`
  border-radius: 0.625rem;
  border: 1px solid #6eb5a2;
  width: 20rem;
  height: 2.5rem;

  display: flex;
  align-items: center;
  .text {
    margin: 0 1rem;
    color: var(--, #343434);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const TextArea = styled.textarea`
  height: 7rem;
  resize: none;
  border-radius: 0.625rem;
  border: 1px solid #6eb5a2;
  background: #fff;
  padding: 0.8rem;
  color: var(--, #343434);
  font-family: Pretendard;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputWhole = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
`;

export const AIContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 3rem;
  padding: 2rem;
  width: 100vw;
  .img {
    width: 50vw;
    border-radius: 50%;
  }
  .text {
    color: #343434;
    font-family: Pretendard;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.1875rem; /* 159.091% */
  }
`;

export const GNBContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
`;
