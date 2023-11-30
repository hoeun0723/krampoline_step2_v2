import styled from "styled-components";
import List from "../../components/List";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import jejuData from "../../data/jejuData";

const ListModal = ({ part }) => {
  // const placeList = [
  //   ["도두봉", "어쩌고저쩌고", "제주 서귀포시 1100로 1555"],
  //   ["동문시장", "어쩌고저쩌고", "제주 서귀포시 남원읍 생기악로 53-38"],
  // ];

  let placeList = [];
  for (const key in jejuData[part]) {
    placeList.push(jejuData[part][key]);
  }

  return (
    <MainWrapper>
      <div>
        <div className="bar-box">
          <img src="/assets/images/black-bar.png" className="bar" alt="bar" />
        </div>
        <div className="title-box">
          <p>장소를 선택하고 스탬프를 생성해주세요</p>
        </div>
      </div>
      <ListWrapper>
        {placeList.map((data) => {
          return (
            <List place={data.name} desc={data.info} address={data.address} />
          );
        })}
      </ListWrapper>
    </MainWrapper>
  );
};

export default ListModal;

const MainWrapper = styled.div`
  width: 100vw;
  height: 45vh;

  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);

  overflow-y: hidden;

  .bar-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    .bar {
      margin-top: 0.63rem;

      margin-bottom: 2.5rem;
      width: 4.75rem;
      height: 0.3125rem;
    }
  }

  .title-box {
    display: flex;
    flex-direction: column;
    align-items: left;
    padding: 0 2rem;

    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const ListWrapper = styled.div`
  margin-top: 1.37rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
