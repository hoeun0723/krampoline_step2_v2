import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

export const DateInput = styled(ReactDatePicker)`
  padding: 0.7rem;
  border-radius: 10px;
  border: 1px solid #d4d4d4;
  width: 80vw;

  color: #70a597;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const Title = styled.p`
  display: flex;
  color: #343434;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
