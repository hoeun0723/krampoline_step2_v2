import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import Tooltip from "./Tooltip";
import ListModal from "./List";
import Modal from "./Modal";

const Main = () => {
  const navigate = useNavigate();

  const moveToStickerPage = () => {
    navigate("/sticker", { state: { page: part } });
  };

  // date
  const [date, setDate] = useState(["2023.12.20", "2023.12.26"]);

  // part
  const [part, setPart] = useState(0);

  const clickPart = (id) => {
    setPart(id);
  };

  return (
    <MainWrapper>
      <DateWrapper>
        <p className="text">
          날짜 : {date[0]}~{date[1]}
        </p>
      </DateWrapper>
      <InfoWrapper>
        <p className="text">지역을 선택해서 스탬프를 추가해보세요!</p>
        <Tooltip season="겨울" />
      </InfoWrapper>

      <MapWrapper>
        <div className="flex-row">
          {part === 1 ? (
            <img
              src="/assets/images/jeju-1-on.png"
              alt="jeju-1"
              className="img1"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-1-off.png"
              alt="jeju-1"
              className="img1"
              onClick={() => clickPart(1)}
            />
          )}
          {part === 2 ? (
            <img
              src="/assets/images/jeju-2-on.png"
              alt="jeju-2"
              className="img2"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-2-off.png"
              alt="jeju-2"
              className="img2"
              onClick={() => clickPart(2)}
            />
          )}
          {part === 3 ? (
            <img
              src="/assets/images/jeju-3-on.png"
              alt="jeju-3"
              className="img3"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-3-off.png"
              alt="jeju-3"
              className="img3"
              onClick={() => clickPart(3)}
            />
          )}
        </div>
        <div className="flex-row">
          {part === 6 ? (
            <img
              src="/assets/images/jeju-6-on.png"
              alt="jeju-6"
              className="img6"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-6-off.png"
              alt="jeju-6"
              className="img6"
              onClick={() => clickPart(6)}
            />
          )}
          {part === 5 ? (
            <img
              src="/assets/images/jeju-5-on.png"
              alt="jeju-5"
              className="img5"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-5-off.png"
              alt="jeju-5"
              className="img5"
              onClick={() => clickPart(5)}
            />
          )}
          {part === 4 ? (
            <img
              src="/assets/images/jeju-4-on.png"
              alt="jeju-4"
              className="img4"
              onClick={() => clickPart(0)}
            />
          ) : (
            <img
              src="/assets/images/jeju-4-off.png"
              alt="jeju-4"
              className="img4"
              onClick={() => clickPart(4)}
            />
          )}
        </div>
      </MapWrapper>

      <Modal part={part} />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  background-color: #f9f9f9;

  padding: 2.3rem 10vw 0 10vw;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

const DateWrapper = styled.div`
  width: 100%;
  height: 2.75rem;

  border-radius: 0.4375rem;
  border: 1px solid #f3f1f1;
  background: #fff;

  display: flex;
  justify-content: left;
  align-items: center;

  padding-left: 1rem;
  margin-bottom: 0.6rem;

  .text {
    color: #000;
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MapWrapper = styled.div`
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .img1 {
    width: 8.92219rem;
    height: 7.73113rem;

    position: relative;
    left: 1.5rem;
    top: 1.3rem;
  }
  .img2 {
    width: 6.0705rem;
    height: 5.04581rem;

    position: relative;
    left: -1.5rem;
  }
  .img3 {
    width: 8.3015rem;
    height: 5.55938rem;

    position: relative;
    left: -3.5rem;
    top: -0.7rem;
  }
  .img4 {
    width: 9.86394rem;
    height: 8.204rem;

    position: relative;
    top: -6.5rem;
    left: -0.5rem;
  }
  .img5 {
    width: 5.93944rem;
    height: 5.11088rem;

    position: relative;
    top: -3rem;
    left: 2rem;
  }
  .img6 {
    width: 6.344rem;
    height: 5.22463rem;

    position: relative;
    top: -2rem;
    left: 3.3rem;
  }
`;

const InfoWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2.5rem;

  position: relative;
  z-index: 20;

  .text {
    color: #70a597;
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
